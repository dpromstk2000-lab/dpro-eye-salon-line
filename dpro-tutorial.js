(() => {
  "use strict";
  const CONTENT = {first10:{"estimated_minutes":10,"selection_rationale":["owner.htmlの今日の予約を管理者の日常開始地点として最優先","LINE以外の手動予約を管理者主要業務として採用","店舗iPadの施術進行・カルテ・写真をEYE固有コアとして中心化","最新mainで追加されたスタッフ専用ログインを日常運用分岐として追加","business-calendar.htmlは低頻度設定のためFirst10では入口だけ触れGuide Centerへ分離","顧客検索と再来店フォローをリピート運用として採用","件数は他業種に合わせず、最新EYE sourceの役割・画面導線から決定"],"chapters":[{"id":"FT10-CH01","title":"まずオーナー画面を開く","why":"日常業務の開始地点が owner.html の今日の予約だから。","cards":[{"id":"FT10-C01","title":"管理画面へログイン","page":"owner.html","target_id":"eye-owner-login","action":"管理コード入力欄と「開く」を確認する。チュートリアルは入力・送信を自動実行しない。","state_effect":"none"},{"id":"FT10-C02","title":"「今日の予約」を起点にする","page":"owner.html","target_id":"eye-owner-dashboard-nav","action":"左メニューの「今日の予約」とページ構成を確認する。","state_effect":"none"}]},{"id":"FT10-CH02","title":"今日の予約を確認する","why":"当日の来店状況確認が最頻の日常業務だから。","cards":[{"id":"FT10-C03","title":"今日の件数と進行状況を見る","page":"owner.html","target_id":"eye-owner-dashboard-kpi","action":"本日の予約、来店前、来店済み、施術中などの集計を見る。","state_effect":"none"},{"id":"FT10-C04","title":"予約カードを読む","page":"owner.html","target_id":"eye-owner-reservation-list","action":"時間・顧客・メニュー・担当・状態を確認する。","state_effect":"none"}]},{"id":"FT10-CH03","title":"電話・店頭の予約を受ける","why":"LINE以外の受付を一元化するための主要業務だから。","cards":[{"id":"FT10-C05","title":"「電話・店頭予約」を開く","page":"owner.html","target_id":"eye-owner-booking-nav","action":"新規予約入力画面へ移動する。","state_effect":"navigation_only"},{"id":"FT10-C06","title":"受付経路を記録する","page":"owner.html","target_id":"eye-owner-booking-source","action":"電話・Instagram・店頭・オーナー入力のいずれかを選ぶ場所を確認する。","state_effect":"user_action_only"},{"id":"FT10-C07","title":"顧客・メニュー・日時を確認して登録する","page":"owner.html","target_id":"eye-owner-booking-form","action":"顧客、メニュー、担当、空き時間、確認内容の順を理解する。予約確定は利用者が自分で実行する。","state_effect":"mutation_user_only"}]},{"id":"FT10-CH04","title":"店舗iPadで施術を進める","why":"来店後の状態進行・カルテ・写真がEYE SALON固有の日常コアで、最新mainではスタッフ専用認証経路が追加されたため。","cards":[{"id":"FT10-C08","title":"オーナー／管理者として店舗iPadを開く","page":"owner-ipad.html","target_id":"eye-ipad-login","action":"オーナー／管理者は管理コードで店舗iPadを開く入口を確認する。チュートリアルは認証を自動実行しない。","state_effect":"none"},{"id":"FT10-C15","title":"スタッフは専用ログインから店舗iPadを開く","page":"staff-ipad-login.html","target_id":"eye-staff-ipad-login","action":"スタッフ運用ではスタッフコードとPINで認証し、店舗iPadへ進む。店舗設定やスタッフ管理はスタッフ画面から開かないことを確認する。チュートリアルは認証を自動実行しない。","state_effect":"auth_user_only"},{"id":"FT10-C09","title":"対象日の予約を選ぶ","page":"owner-ipad.html","target_id":"eye-ipad-reservation-list","action":"予約一覧から対象のお客様を選ぶ。","state_effect":"selection_only"},{"id":"FT10-C10","title":"施術ステータスの順番を確認する","page":"owner-ipad.html","target_id":"eye-ipad-status-flow","action":"予約確定→来店→カウンセリング→施術開始→仕上げ→会計待ち→施術完了の流れを確認する。状態変更は自動実行しない。","state_effect":"mutation_user_only"},{"id":"FT10-C11","title":"カルテ・写真・履歴を使い分ける","page":"owner-ipad.html","target_id":"eye-ipad-tabs","action":"カルテ入力、施術写真、履歴の3タブを確認する。実顧客写真を教材には使わない。","state_effect":"none"}]},{"id":"FT10-CH05","title":"顧客と再来店を確認する","why":"EYE SALONの再現性とリピート運用に直結するから。","cards":[{"id":"FT10-C12","title":"顧客検索・カルテを開く","page":"owner.html","target_id":"eye-owner-customers-nav","action":"氏名・電話番号・顧客番号から顧客を探せることを確認する。","state_effect":"none"},{"id":"FT10-C13","title":"再来店フォローを見る","page":"owner.html","target_id":"eye-owner-followups-nav","action":"再来店候補を確認し、次回予約済みは送信対象外になることを理解する。送信は自動実行しない。","state_effect":"none"}]},{"id":"FT10-CH06","title":"設定と困った時の入口","why":"初期設定変更を日常業務と分離し、Guide Center再利用へつなげるため。","cards":[{"id":"FT10-C14","title":"店舗設定と操作ガイドの場所を覚える","page":"settings.html","target_id":"eye-settings-shop-nav","action":"店舗・予約、営業時間、スタッフ、メニュー・料金、施術席の入口を確認する。臨時休業・特別営業は専用画面、詳細はGuide Centerで調べる。","state_effect":"none"}]}]}};
  if (document.getElementById("dproTutorialLauncher")) return;

  const STORAGE_KEY = "dpro_eye_first10_state_v1";
  const ROLE_ADMIN = "SALON_ADMIN_OPERATOR";
  const ROLE_STAFF = "SALON_STAFF_OPERATOR";
  const STAFF_CARD_IDS = new Set(["FT10-C15","FT10-C09","FT10-C10","FT10-C11"]);
  const BINDINGS = {
    "eye-owner-login": ".login-card",
    "eye-owner-dashboard-nav": '[data-view="dashboard"]',
    "eye-owner-dashboard-kpi": ".kpi-grid",
    "eye-owner-reservation-list": "#reservationList",
    "eye-owner-booking-nav": '[data-view="booking"]',
    "eye-owner-booking-source": "#sourceChoices",
    "eye-owner-booking-form": "#viewBooking",
    "eye-ipad-login": ".login-card",
    "eye-staff-ipad-login": ".card",
    "eye-ipad-reservation-list": ".reservation-list",
    "eye-ipad-status-flow": ".status-buttons",
    "eye-ipad-tabs": ".tabs",
    "eye-owner-customers-nav": '[data-view="customers"]',
    "eye-owner-followups-nav": '[data-view="followups"]',
    "eye-settings-shop-nav": '[data-section="shop"]'
  };

  const ALL_CARDS = CONTENT.first10.chapters.flatMap(ch =>
    ch.cards.map(card => ({...card, chapter_id:ch.id, chapter_title:ch.title, chapter_why:ch.why}))
  );

  function safeState() {
    try {
      const x = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (x && ["NOT_STARTED","IN_PROGRESS","SKIPPED","COMPLETED"].includes(x.status)) return x;
    } catch {}
    return {status:"NOT_STARTED", role:"", index:0};
  }
  let state = safeState();
  let highlighted = null;

  function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function roleCards(role=state.role) {
    return role === ROLE_STAFF ? ALL_CARDS.filter(c => STAFF_CARD_IDS.has(c.id)) : ALL_CARDS;
  }
  function pageName() {
    const p = location.pathname.split("/").pop();
    return p || "index.html";
  }
  function bindTargets() {
    Object.entries(BINDINGS).forEach(([id, selector]) => {
      const node = document.querySelector(selector);
      if (node && !node.dataset.dproGuideId) node.dataset.dproGuideId = id;
    });
  }
  function visible(node) {
    if (!node) return false;
    const r=node.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && getComputedStyle(node).visibility !== "hidden";
  }
  function clearHighlight() {
    if (highlighted) highlighted.classList.remove("dpro-guide-target-active");
    highlighted = null;
  }
  function highlight(card) {
    clearHighlight();
    if (card.page !== pageName()) return false;
    bindTargets();
    const node = document.querySelector(`[data-dpro-guide-id="${CSS.escape(card.target_id)}"]`);
    if (!visible(node)) return false;
    highlighted=node;
    node.classList.add("dpro-guide-target-active");
    node.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});
    return true;
  }
  function targetUrl(card) {
    const u = new URL(`./${card.page}`, location.href);
    const now = new URL(location.href);
    if (now.searchParams.get("demo") === "1") u.searchParams.set("demo","1");
    u.searchParams.set("dpro_tutorial","1");
    u.searchParams.set("dpro_role",state.role || ROLE_ADMIN);
    return u.href;
  }

  function css() {
    const s=document.createElement("style"); s.id="dproTutorialStyle";
    s.textContent=`
      .dpro-guide-target-active{outline:5px solid #d78b4d!important;outline-offset:5px!important;scroll-margin:170px 12px 330px!important;position:relative;z-index:2147483000!important}
      #dproTutorialLauncher{position:fixed;right:18px;bottom:18px;z-index:2147483500;min-height:50px;border:0;border-radius:999px;padding:11px 17px;color:#fff;background:#6F4C55;box-shadow:0 10px 30px rgba(0,0,0,.23);font:900 14px/1.2 system-ui,-apple-system,"Noto Sans JP",sans-serif;cursor:pointer}
      #dproTutorialPanel{position:fixed;right:18px;bottom:82px;z-index:2147483600;width:min(430px,calc(100vw - 28px));max-height:min(630px,calc(100vh - 110px));overflow:auto;padding:18px;border:1px solid #DED1CA;border-radius:20px;background:#fff;color:#2F2B2C;box-shadow:0 18px 52px rgba(0,0,0,.26);font:16px/1.65 system-ui,-apple-system,"Noto Sans JP",sans-serif}
      #dproTutorialPanel[hidden]{display:none!important}#dproTutorialPanel *{box-sizing:border-box}
      .dpt-head{display:flex;justify-content:space-between;gap:10px;align-items:flex-start}.dpt-head strong{font-size:19px}.dpt-x{border:0;background:#F2EAE5;color:#6F4C55;border-radius:10px;min-width:42px;min-height:42px;font-size:20px;cursor:pointer}
      .dpt-kicker{color:#A86F7D;font-size:12px;font-weight:900;letter-spacing:.06em}.dpt-progress{height:8px;border-radius:99px;background:#F2EAE5;overflow:hidden;margin:12px 0}.dpt-progress span{display:block;height:100%;background:#A86F7D}
      .dpt-why,.dpt-safe{margin-top:11px;padding:11px 12px;border-radius:12px;background:#FAF7F2;color:#6E6567;font-size:14px}.dpt-safe{border-left:4px solid #A96F32;background:#FFF5E8;color:#70481F}
      .dpt-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}.dpt-btn{min-height:46px;border:0;border-radius:12px;padding:9px 13px;font:900 14px/1.2 inherit;cursor:pointer}.dpt-primary{color:#fff;background:#A86F7D}.dpt-secondary{color:#6F4C55;background:#F2EAE5}.dpt-danger{color:#7E343A;background:#F7E6E7}.dpt-role-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:14px}.dpt-role{min-height:82px;border:2px solid #DED1CA;border-radius:14px;padding:12px;background:#fff;text-align:left;cursor:pointer}.dpt-role b{display:block;color:#6F4C55}.dpt-role span{display:block;margin-top:4px;color:#6E6567;font-size:13px}.dpt-note{margin-top:9px;color:#6E6567;font-size:13px}
      @media(max-width:520px){#dproTutorialLauncher{right:10px;bottom:10px}#dproTutorialPanel{left:8px;right:8px;bottom:70px;width:auto;max-height:calc(100vh - 84px);border-radius:18px}.dpt-role-grid{grid-template-columns:1fr}.dpro-guide-target-active{scroll-margin-bottom:360px!important}}
      @media(prefers-reduced-motion:reduce){#dproTutorialPanel *{scroll-behavior:auto!important}}
    `;
    document.head.append(s);
  }

  function makeUI() {
    css();
    const launcher=document.createElement("button"); launcher.id="dproTutorialLauncher"; launcher.type="button"; launcher.textContent="操作ガイド"; launcher.setAttribute("aria-haspopup","dialog");
    const panel=document.createElement("section"); panel.id="dproTutorialPanel"; panel.hidden=true; panel.setAttribute("role","dialog"); panel.setAttribute("aria-modal","false"); panel.setAttribute("aria-label","DPRO First 10 Minutes 操作ガイド");
    document.body.append(panel,launcher);
    launcher.addEventListener("click",()=>openPanel());
    document.addEventListener("keydown",e=>{ if(e.key==="Escape"&&!panel.hidden){ panel.hidden=true; clearHighlight(); launcher.focus(); }});
    return {launcher,panel};
  }
  const ui=makeUI();

  function rolePicker() {
    clearHighlight();
    ui.panel.innerHTML=`<div class="dpt-head"><div><div class="dpt-kicker">FIRST 10 MINUTES</div><strong>どの立場で確認しますか？</strong></div><button class="dpt-x" data-close aria-label="閉じる">×</button></div>
      <div class="dpt-role-grid"><button class="dpt-role" data-role="${ROLE_ADMIN}"><b>オーナー・管理者</b><span>6章15カードの全体版。スタッフ専用入口も管理者の確認事項として含みます。</span></button><button class="dpt-role" data-role="${ROLE_STAFF}"><b>スタッフ</b><span>スタッフ専用ログインと、許可された店舗iPadの日常操作だけを確認します。</span></button></div>
      <div class="dpt-note">ガイドは予約確定・状態変更・保存・送信・認証を自動実行しません。</div>`;
    ui.panel.querySelector("[data-close]").onclick=closePanel;
    ui.panel.querySelectorAll("[data-role]").forEach(b=>b.onclick=()=>{
      state={status:"IN_PROGRESS",role:b.dataset.role,index:0}; save(); renderCard();
    });
  }

  function renderCard() {
    const cards=roleCards();
    if (!cards.length) return rolePicker();
    if (state.index >= cards.length) { state.status="COMPLETED"; state.index=cards.length; save(); return renderDone(); }
    const card=cards[state.index];
    const onPage=card.page===pageName();
    const found=highlight(card);
    const pct=Math.round(((state.index+1)/cards.length)*100);
    ui.panel.innerHTML=`<div class="dpt-head"><div><div class="dpt-kicker">${state.role===ROLE_STAFF?'スタッフ版':'オーナー・管理者版'} / ${state.index+1} of ${cards.length}</div><strong>${escapeHtml(card.title)}</strong></div><button class="dpt-x" data-close aria-label="閉じる">×</button></div>
      <div class="dpt-progress" aria-label="進捗 ${pct}%"><span style="width:${pct}%"></span></div>
      <div class="dpt-why"><b>${escapeHtml(card.chapter_title)}</b><br>${escapeHtml(card.chapter_why||"")}</div>
      <p>${escapeHtml(card.action)}</p>
      <div class="dpt-safe">${onPage?(found?'オレンジ枠の場所を確認してください。':'対象が現在表示されていないため、説明カードとして安全に表示しています。'):`対象画面：${escapeHtml(card.page)}。自動では移動しません。`}</div>
      <div class="dpt-actions">${!onPage?'<button class="dpt-btn dpt-primary" data-open>対象画面を開く</button>':''}<button class="dpt-btn dpt-primary" data-next>${state.index===cards.length-1?'完了':'次へ'}</button>${state.index>0?'<button class="dpt-btn dpt-secondary" data-prev>戻る</button>':''}<button class="dpt-btn dpt-danger" data-skip>今回はスキップ</button></div>`;
    ui.panel.querySelector("[data-close]").onclick=closePanel;
    ui.panel.querySelector("[data-next]").onclick=()=>{ state.index++; state.status=state.index>=cards.length?"COMPLETED":"IN_PROGRESS"; save(); renderCard(); };
    const prev=ui.panel.querySelector("[data-prev]"); if(prev) prev.onclick=()=>{state.index=Math.max(0,state.index-1);state.status="IN_PROGRESS";save();renderCard();};
    ui.panel.querySelector("[data-skip]").onclick=()=>{state.status="SKIPPED";save();renderSkipped();};
    const open=ui.panel.querySelector("[data-open]"); if(open) open.onclick=()=>{location.href=targetUrl(card);};
  }

  function renderDone() {
    clearHighlight();
    ui.panel.innerHTML=`<div class="dpt-head"><div><div class="dpt-kicker">FIRST 10 MINUTES</div><strong>操作ガイドを完了しました</strong></div><button class="dpt-x" data-close aria-label="閉じる">×</button></div><p>必要な時はいつでも最初から再生できます。</p><div class="dpt-actions"><button class="dpt-btn dpt-primary" data-replay>最初から見る</button><button class="dpt-btn dpt-secondary" data-role-change>役割を変更</button></div>`;
    ui.panel.querySelector("[data-close]").onclick=closePanel;
    ui.panel.querySelector("[data-replay]").onclick=()=>{state.index=0;state.status="IN_PROGRESS";save();renderCard();};
    ui.panel.querySelector("[data-role-change]").onclick=()=>{state={status:"NOT_STARTED",role:"",index:0};save();rolePicker();};
  }
  function renderSkipped() {
    clearHighlight();
    ui.panel.innerHTML=`<div class="dpt-head"><div><div class="dpt-kicker">FIRST 10 MINUTES</div><strong>今回はスキップしました</strong></div><button class="dpt-x" data-close aria-label="閉じる">×</button></div><p>状態は保存されています。操作ガイドからいつでも再開できます。</p><div class="dpt-actions"><button class="dpt-btn dpt-primary" data-resume>続きから再開</button><button class="dpt-btn dpt-secondary" data-replay>最初から見る</button></div>`;
    ui.panel.querySelector("[data-close]").onclick=closePanel;
    ui.panel.querySelector("[data-resume]").onclick=()=>{state.status="IN_PROGRESS";save();renderCard();};
    ui.panel.querySelector("[data-replay]").onclick=()=>{state.index=0;state.status="IN_PROGRESS";save();renderCard();};
  }
  function escapeHtml(x){ return String(x??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m])); }
  function closePanel(){ui.panel.hidden=true;clearHighlight();ui.launcher.focus();}
  function openPanel(){ui.panel.hidden=false;bindTargets(); if(!state.role||state.status==="NOT_STARTED")rolePicker(); else if(state.status==="COMPLETED")renderDone(); else if(state.status==="SKIPPED")renderSkipped(); else renderCard(); setTimeout(()=>ui.panel.querySelector("button")?.focus(),0);}

  bindTargets();
  const params=new URLSearchParams(location.search);
  const roleParam=params.get("dpro_role");
  if (!state.role && [ROLE_ADMIN,ROLE_STAFF].includes(roleParam)) { state={status:"IN_PROGRESS",role:roleParam,index:0}; save(); }
  if (params.get("dpro_tutorial")==="1") openPanel();
})();
