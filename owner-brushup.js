(() => {
  "use strict";

  const config = window.DPRO_EYE_CONFIG;
  if (!config || !/\/owner\.html$/i.test(window.location.pathname)) return;

  const NO_NEXT_VISIT_SENTINEL = "1900-01-01";
  const state = {
    pendingCustomerTab: "",
    pendingBookingSelect: false,
    serviceRevisitDays: new Map(),
    servicesLoaded: false,
  };

  const $ = selector => document.querySelector(selector);

  function normalize(value) {
    return String(value || "")
      .normalize("NFKC")
      .replace(/\s+/g, "")
      .toLowerCase();
  }

  function addDays(dateValue, amount) {
    if (!dateValue || !Number.isFinite(amount)) return "";
    const date = new Date(`${dateValue}T00:00:00+09:00`);
    if (Number.isNaN(date.getTime())) return "";
    date.setUTCDate(date.getUTCDate() + amount);
    return new Intl.DateTimeFormat("sv-SE", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  }

  function installFetchSafetyPatch() {
    if (window.__DPRO_EYE_OWNER_FETCH_PATCHED__) return;
    window.__DPRO_EYE_OWNER_FETCH_PATCHED__ = true;

    const originalFetch = window.fetch.bind(window);
    window.fetch = (input, init = {}) => {
      try {
        const url =
          typeof input === "string" ? input :
          input instanceof URL ? input.href :
          input?.url || "";
        const method = String(init.method || "GET").toUpperCase();
        if (
          url === config.API.admin_reservation_status &&
          method === "PATCH" &&
          typeof init.body === "string"
        ) {
          const body = JSON.parse(init.body);
          if (
            body?.status === "completed" &&
            body?.next_revisit_date === NO_NEXT_VISIT_SENTINEL
          ) {
            delete body.next_revisit_date;
            init = {...init, body: JSON.stringify(body)};
          }
        }
      } catch {
        // Existing request is used unchanged when the enhancement cannot parse it.
      }
      return originalFetch(input, init);
    };
  }

  function injectStyles() {
    if ($("#eyeOwnerBrushupStyles")) return;
    const style = document.createElement("style");
    style.id = "eyeOwnerBrushupStyles";
    style.textContent = `
      .brushup-version {
        display:inline-flex;
        min-height:32px;
        align-items:center;
        margin-top:8px;
        padding:4px 10px;
        border-radius:999px;
        color:#6F4C55;
        background:#F2EAE5;
        font-size:13px;
        font-weight:900;
      }
      .brushup-dashboard-guide {
        display:flex;
        gap:10px;
        align-items:flex-start;
        margin-bottom:14px;
        padding:13px 15px;
        border-left:5px solid #A86F7D;
        border-radius:11px;
        color:#60474E;
        background:#FCF4F5;
        font-weight:800;
      }
      .brushup-dashboard-guide strong {
        display:block;
        color:#6F4C55;
      }
      .reservation-card.brushup-status-progress {
        border-left:6px solid #5D7084;
      }
      .reservation-card.brushup-status-completed {
        border-left:6px solid #64745F;
      }
      .reservation-card.brushup-status-cancelled {
        border-left:6px solid #A14E55;
        opacity:.82;
      }
      .reservation-actions .brushup-history-button {
        color:#6F4C55;
        background:#F2EAE5;
      }
      .brushup-attention {
        margin-top:13px;
        padding:15px;
        border:1px solid #DED1CA;
        border-radius:14px;
        background:#FFFFFF;
      }
      .brushup-attention.clear {
        color:#40513B;
        border-color:#B9C7B4;
        background:#F1F7EF;
      }
      .brushup-attention.alert {
        color:#7A4B1F;
        border-color:#D8B88F;
        background:#FFF5E8;
      }
      .brushup-attention strong {
        display:block;
        margin-bottom:5px;
        font-size:18px;
      }
      .brushup-attention ul {
        margin:7px 0 0;
        padding-left:21px;
      }
      .brushup-customer-actions {
        display:flex;
        flex-wrap:wrap;
        gap:9px;
        margin-top:13px;
        padding:13px;
        border-radius:14px;
        background:#F7F3EF;
      }
      .brushup-carte-guide {
        grid-column:1/-1;
        padding:13px 15px;
        border-left:5px solid #A86F7D;
        border-radius:11px;
        color:#60474E;
        background:#FCF4F5;
        font-weight:800;
      }
      .brushup-carte-guide strong {
        display:block;
        color:#6F4C55;
      }
      .brushup-complete-guide {
        margin-top:12px;
        padding:12px 14px;
        border-radius:12px;
        color:#60474E;
        background:#F4EAEC;
        font-weight:800;
      }
      .brushup-no-next {
        display:flex;
        gap:9px;
        align-items:center;
        margin-top:10px;
        padding:11px 13px;
        border:1px solid #DED1CA;
        border-radius:12px;
        background:#FFFFFF;
        cursor:pointer;
      }
      .brushup-no-next input {
        width:22px;
        min-height:22px;
        margin:0;
        accent-color:#A86F7D;
      }
      @media (max-width:820px) {
        .brushup-customer-actions .btn {
          flex:1 1 180px;
        }
      }
      @media (max-width:440px) {
        .reservation-actions .btn,
        .brushup-customer-actions .btn {
          width:100%;
          flex:1 1 100%;
        }
      }
    `;
    document.head.append(style);
  }

  function addVersionLabel() {
    const top = $("#pageDescription");
    if (!top || $("#eyeBrushupVersion")) return;
    const label = document.createElement("span");
    label.id = "eyeBrushupVersion";
    label.className = "brushup-version";
    label.textContent = "EYE-BRUSHUP-2｜日常操作改善";
    top.insertAdjacentElement("afterend", label);
  }

  function addDashboardGuide() {
    const dashboard = $("#viewDashboard");
    const kpi = dashboard?.querySelector(".kpi-grid");
    if (!dashboard || !kpi || $("#brushupDashboardGuide")) return;
    const guide = document.createElement("div");
    guide.id = "brushupDashboardGuide";
    guide.className = "brushup-dashboard-guide";
    guide.innerHTML = `
      <span aria-hidden="true">✓</span>
      <div>
        <strong>予約カードからカルテへ直接進めます</strong>
        「カルテ入力」または「前回カルテ」を押すと、顧客検索の途中操作を省略します。
      </div>
    `;
    kpi.insertAdjacentElement("afterend", guide);
  }

  async function loadServiceRevisitDays() {
    if (state.servicesLoaded) return;
    state.servicesLoaded = true;
    try {
      const response = await fetch(config.API.services, {cache: "no-store"});
      if (!response.ok) return;
      const data = await response.json();
      const services = [];
      if (Array.isArray(data.services)) services.push(...data.services);
      for (const category of data.categories || []) {
        if (Array.isArray(category.services)) services.push(...category.services);
      }
      for (const service of services) {
        const days = Number(service.revisit_days);
        if (!service.service_name || !Number.isFinite(days) || days < 1) continue;
        state.serviceRevisitDays.set(normalize(service.service_name), days);
      }
    } catch {
      // Completion remains usable without automatic suggestion.
    }
  }

  function revisitDaysForModal() {
    const text = $("#modalReservationInfo")?.textContent || "";
    const serviceText = text.split("／").slice(2).join("／");
    if (!serviceText) return null;

    const candidates = [];
    for (const [name, days] of state.serviceRevisitDays) {
      if (name && normalize(serviceText).includes(name)) candidates.push(days);
    }
    return candidates.length ? Math.min(...candidates) : null;
  }

  function reservationDateForModal() {
    const text = $("#modalReservationInfo")?.textContent || "";
    return text.match(/\d{4}-\d{2}-\d{2}/)?.[0] || "";
  }

  function installCompletionEnhancement() {
    const completeFields = $("#completeFields");
    const statusButtons = $("#statusButtons");
    const input = $("#completeNextVisit");
    if (!completeFields || !statusButtons || !input) return;

    if (!$("#brushupCompleteGuide")) {
      const guide = document.createElement("div");
      guide.id = "brushupCompleteGuide";
      guide.className = "brushup-complete-guide";
      guide.textContent =
        "施術完了時は、メニュー設定の「再来店目安」から候補日を自動入力します。日付は変更できます。";
      completeFields.append(guide);

      const noNext = document.createElement("label");
      noNext.className = "brushup-no-next";
      noNext.innerHTML = `
        <input id="brushupNoNextVisit" type="checkbox">
        <span>次回来店日は未定のまま施術完了にする</span>
      `;
      completeFields.append(noNext);

      $("#brushupNoNextVisit").addEventListener("change", event => {
        if (event.target.checked) {
          input.value = "";
          input.disabled = true;
          guide.textContent = "次回来店日は登録せず、施術完了だけを保存します。";
        } else {
          input.disabled = false;
          guide.textContent =
            "施術完了時は、メニュー設定の「再来店目安」から候補日を自動入力します。日付は変更できます。";
        }
      });
    }

    if (!statusButtons.dataset.brushupCapture) {
      statusButtons.dataset.brushupCapture = "1";
      statusButtons.addEventListener("click", event => {
        const button = event.target.closest("button");
        if (!button || !button.textContent.includes("施術完了")) return;

        const noNext = $("#brushupNoNextVisit");
        const guide = $("#brushupCompleteGuide");

        if (completeFields.hidden) {
          const days = revisitDaysForModal();
          const date = reservationDateForModal();
          const candidate = days ? addDays(date, days) : "";
          setTimeout(() => {
            if (candidate && !input.value && !noNext?.checked) {
              input.value = candidate;
              if (guide) {
                guide.textContent =
                  `メニュー設定から ${days}日後の ${candidate} を候補にしました。変更もできます。`;
              }
            }
          }, 0);
          return;
        }

        if (noNext?.checked) {
          input.disabled = false;
          input.value = NO_NEXT_VISIT_SENTINEL;
          if (guide) guide.textContent = "次回来店日は未定として施術完了します。";
          return;
        }

        if (!input.value) {
          const days = revisitDaysForModal();
          const date = reservationDateForModal();
          const candidate = days ? addDays(date, days) : "";
          if (candidate) {
            input.value = candidate;
            if (guide) {
              guide.textContent =
                `メニュー設定から ${days}日後の ${candidate} を候補にしました。変更もできます。`;
            }
          }
        }
      }, true);
    }

    const modal = $("#reservationModal");
    if (modal && !modal.dataset.brushupObserved) {
      modal.dataset.brushupObserved = "1";
      new MutationObserver(() => {
        if (!modal.classList.contains("show")) return;
        const noNext = $("#brushupNoNextVisit");
        const guide = $("#brushupCompleteGuide");
        if (noNext) noNext.checked = false;
        input.disabled = false;
        if (guide) {
          guide.textContent =
            "施術完了時は、メニュー設定の「再来店目安」から候補日を自動入力します。日付は変更できます。";
        }
      }).observe(modal, {attributes: true, attributeFilter: ["class"]});
    }
  }

  function markReservationCard(card) {
    const badgeText = normalize(card.querySelector(".badge")?.textContent);
    card.classList.remove(
      "brushup-status-progress",
      "brushup-status-completed",
      "brushup-status-cancelled"
    );
    if (badgeText.includes("完了")) {
      card.classList.add("brushup-status-completed");
    } else if (
      badgeText.includes("キャンセル") ||
      badgeText.includes("無断")
    ) {
      card.classList.add("brushup-status-cancelled");
    } else if (
      badgeText.includes("来店") ||
      badgeText.includes("カウンセリング") ||
      badgeText.includes("施術") ||
      badgeText.includes("会計")
    ) {
      card.classList.add("brushup-status-progress");
    }
  }

  function enhanceReservationCards() {
    for (const card of document.querySelectorAll(".reservation-card")) {
      markReservationCard(card);
      if (card.dataset.brushupEnhanced) continue;

      const actions = card.querySelector(".reservation-actions");
      if (!actions) continue;
      const buttons = [...actions.querySelectorAll("button")];
      const statusButton = buttons.find(button =>
        button.textContent.includes("状態変更")
      );
      const customerButton = buttons.find(button =>
        button.textContent.includes("顧客を開く")
      );
      if (statusButton) statusButton.textContent = "進行を更新";
      if (!customerButton) continue;

      card.dataset.brushupEnhanced = "1";
      customerButton.textContent = "カルテ入力";
      customerButton.addEventListener("click", () => {
        state.pendingCustomerTab =
          customerButton.dataset.brushupNextTab || "new-carte";
        delete customerButton.dataset.brushupNextTab;
      });

      const history = document.createElement("button");
      history.type = "button";
      history.className =
        "btn btn-small brushup-history-button";
      history.textContent = "前回カルテ";
      history.addEventListener("click", () => {
        customerButton.dataset.brushupNextTab = "cartes";
        customerButton.click();
      });
      actions.append(history);
    }
  }

  function clickCustomerTab(name) {
    const tab = document.querySelector(`.tab[data-tab="${name}"]`);
    if (tab) tab.click();
  }

  function maybeOpenCustomerResult() {
    if (!state.pendingCustomerTab) return;
    const first = $("#customerResults .customer-card");
    if (first && !first.dataset.brushupAutoOpened) {
      first.dataset.brushupAutoOpened = "1";
      first.click();
    }
  }

  function maybeFinishCustomerNavigation() {
    if (!state.pendingCustomerTab) return;
    const panel = $("#customerDetailPanel");
    const customerNo = $("#detailCustomerNo")?.textContent?.trim();
    if (!panel || panel.hidden || !customerNo || customerNo === "―") return;

    const target = state.pendingCustomerTab;
    state.pendingCustomerTab = "";
    clickCustomerTab(target);
    panel.scrollIntoView({behavior: "smooth", block: "start"});
  }

  function installCustomerNavigationObservers() {
    const results = $("#customerResults");
    const detail = $("#customerDetailPanel");
    if (results && !results.dataset.brushupObserved) {
      results.dataset.brushupObserved = "1";
      new MutationObserver(maybeOpenCustomerResult).observe(results, {
        childList: true,
        subtree: true,
      });
    }
    if (detail && !detail.dataset.brushupObserved) {
      detail.dataset.brushupObserved = "1";
      new MutationObserver(() => {
        renderAttention();
        maybeFinishCustomerNavigation();
      }).observe(detail, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["hidden"],
      });
    }
  }

  function installBookingResultObserver() {
    const results = $("#bookingCustomerResults");
    if (!results || results.dataset.brushupObserved) return;
    results.dataset.brushupObserved = "1";
    new MutationObserver(() => {
      if (!state.pendingBookingSelect) return;
      const first = results.querySelector(".customer-card");
      if (!first) return;
      state.pendingBookingSelect = false;
      first.click();
      $("#bookingMenus")?.scrollIntoView({behavior: "smooth", block: "start"});
    }).observe(results, {childList: true, subtree: true});
  }

  function addCustomerQuickActions() {
    const header = $("#customerDetailPanel .detail-header");
    if (!header || $("#brushupCustomerActions")) return;

    const actions = document.createElement("div");
    actions.id = "brushupCustomerActions";
    actions.className = "brushup-customer-actions";

    const newCarte = document.createElement("button");
    newCarte.type = "button";
    newCarte.className = "btn btn-primary";
    newCarte.textContent = "今回カルテを入力";
    newCarte.addEventListener("click", () => {
      clickCustomerTab("new-carte");
      $("#tabNewCarte")?.scrollIntoView({behavior: "smooth", block: "start"});
    });

    const history = document.createElement("button");
    history.type = "button";
    history.className = "btn btn-secondary";
    history.textContent = "前回カルテを見る";
    history.addEventListener("click", () => {
      clickCustomerTab("cartes");
      $("#tabCartes")?.scrollIntoView({behavior: "smooth", block: "start"});
    });

    const nextBooking = document.createElement("button");
    nextBooking.type = "button";
    nextBooking.className = "btn btn-success";
    nextBooking.textContent = "次回予約を登録";
    nextBooking.addEventListener("click", () => {
      const customerNo = $("#detailCustomerNo")?.textContent?.trim();
      if (!customerNo || customerNo === "―") return;
      document.querySelector('[data-view="booking"]')?.click();
      const query = $("#bookingCustomerQuery");
      if (query) query.value = customerNo;
      state.pendingBookingSelect = true;
      $("#bookingCustomerSearch")?.click();
    });

    actions.append(newCarte, history, nextBooking);
    header.insertAdjacentElement("afterend", actions);

    const attention = document.createElement("div");
    attention.id = "brushupAttention";
    attention.className = "brushup-attention clear";
    actions.insertAdjacentElement("beforebegin", attention);
    renderAttention();
  }

  function meaningful(value) {
    const text = normalize(value);
    if (!text || text === "―") return false;
    const safeWords = ["なし", "ありません", "未設定", "該当なし", "いいえ", "未使用"];
    return !safeWords.some(word => text === word || text.endsWith(word));
  }

  function renderAttention() {
    const box = $("#brushupAttention");
    if (!box) return;

    const items = [];
    const contact = $("#detailContactLens")?.textContent?.trim() || "";
    const sensitive = $("#detailSensitive")?.textContent?.trim() || "";
    const allergy = $("#detailAllergy")?.textContent?.trim() || "";
    const intake = $("#latestIntake")?.textContent?.trim() || "";

    if (meaningful(contact)) items.push(`コンタクト：${contact}`);
    if (meaningful(sensitive)) items.push(`敏感肌：${sensitive}`);
    if (meaningful(allergy)) items.push(`アレルギー・注意事項：${allergy}`);
    if (
      meaningful(intake) &&
      !normalize(intake).includes("事前確認情報はありません")
    ) {
      items.push(`事前確認：${intake}`);
    }

    box.replaceChildren();
    const title = document.createElement("strong");
    if (!items.length) {
      box.className = "brushup-attention clear";
      title.textContent = "施術上の重要な注意事項は登録されていません";
      box.append(title);
      return;
    }

    box.className = "brushup-attention alert";
    title.textContent = "施術前に確認してください";
    const list = document.createElement("ul");
    for (const item of items) {
      const row = document.createElement("li");
      row.textContent = item;
      list.append(row);
    }
    box.append(title, list);
  }

  function setFieldVisible(id, visible) {
    const field = $(`#${id}`)?.closest("label");
    if (field) field.hidden = !visible;
  }

  function installCarteFieldSwitch() {
    const type = $("#carteTreatmentType");
    const form = $("#tabNewCarte .form-grid");
    if (!type || !form) return;

    if (!$("#brushupCarteGuide")) {
      const guide = document.createElement("div");
      guide.id = "brushupCarteGuide";
      guide.className = "brushup-carte-guide";
      form.prepend(guide);
    }

    const always = new Set([
      "carteTreatmentType", "carteDate", "carteStaff",
      "carteNextVisit", "carteFinish", "carteHomecare",
      "carteNextImprovement", "cartePrivateNote",
    ]);

    const profiles = {
      lash_lift: {
        label: "ラッシュリフト用",
        help: "ロッド、立ち上がり、薬剤、放置時間を中心に入力します。",
        fields: ["carteRod", "carteCurl", "carteDifference",
          "carteChemical", "carteProcessing"],
      },
      lash_perm: {
        label: "まつげパーマ用",
        help: "ロッド、カール、薬剤、放置時間を中心に入力します。",
        fields: ["carteRod", "carteCurl", "carteDifference",
          "carteChemical", "carteProcessing"],
      },
      extension: {
        label: "まつげエクステ用",
        help: "長さ、太さ、本数、デザイン、グルーを中心に入力します。",
        fields: ["carteCurl", "carteLength", "carteThickness",
          "carteCount", "carteDesign", "carteDifference", "carteChemical"],
      },
      repair: {
        label: "リペア用",
        help: "残存状態と追加内容が分かる項目だけを表示します。",
        fields: ["carteCurl", "carteLength", "carteThickness",
          "carteCount", "carteDesign", "carteDifference", "carteChemical"],
      },
      off: {
        label: "オフ用",
        help: "使用薬剤、刺激、仕上がり、ホームケアを記録します。",
        fields: ["carteChemical"],
      },
      brow: {
        label: "アイブロウ用",
        help: "眉形、骨格、毛流れ、肌状態を中心に入力します。",
        fields: ["carteBrowShape", "carteWaxSkin", "carteDifference"],
      },
      wax: {
        label: "眉ワックス用",
        help: "眉形、肌状態、赤み、ホームケアを中心に入力します。",
        fields: ["carteBrowShape", "carteWaxSkin", "carteDifference"],
      },
      set: {
        label: "まつげ＋眉セット用",
        help: "まつげと眉の両方に必要な項目を表示します。",
        fields: ["carteRod", "carteCurl", "carteLength", "carteThickness",
          "carteCount", "carteDesign", "carteDifference", "carteChemical",
          "carteProcessing", "carteBrowShape", "carteWaxSkin"],
      },
      other: {
        label: "その他施術用",
        help: "デザイン、左右差、仕上がり、店舗内メモを記録します。",
        fields: ["carteDesign", "carteDifference"],
      },
    };

    const optional = [
      "carteRod", "carteCurl", "carteLength", "carteThickness",
      "carteCount", "carteDesign", "carteDifference", "carteChemical",
      "carteProcessing", "carteBrowShape", "carteWaxSkin",
    ];

    const apply = () => {
      const profile = profiles[type.value] || profiles.other;
      const visible = new Set([...always, ...profile.fields]);
      for (const id of optional) setFieldVisible(id, visible.has(id));
      const guide = $("#brushupCarteGuide");
      if (guide) {
        guide.innerHTML = `<strong>${profile.label}</strong>${profile.help}`;
      }
    };

    if (!type.dataset.brushupBound) {
      type.dataset.brushupBound = "1";
      type.addEventListener("change", apply);
      document.addEventListener("click", event => {
        const target = event.target.closest("button");
        if (
          target?.dataset.tab === "new-carte" ||
          target?.id === "carteClearButton" ||
          target?.id === "carteSaveButton"
        ) {
          setTimeout(apply, 0);
        }
      });
    }
    apply();
  }

  function installObservers() {
    const reservations = $("#reservationList");
    if (reservations && !reservations.dataset.brushupObserved) {
      reservations.dataset.brushupObserved = "1";
      new MutationObserver(enhanceReservationCards).observe(reservations, {
        childList: true,
        subtree: true,
      });
    }
    enhanceReservationCards();
    installCustomerNavigationObservers();
    installBookingResultObserver();
  }

  function boot() {
    installFetchSafetyPatch();
    injectStyles();
    addVersionLabel();
    addDashboardGuide();
    installCompletionEnhancement();
    addCustomerQuickActions();
    installCarteFieldSwitch();
    installObservers();
    loadServiceRevisitDays();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, {once: true});
  } else {
    boot();
  }
})();