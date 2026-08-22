(() => {
  "use strict";

  const REPOSITORY_NAME = "dpro-eye-salon-line";
  const GITHUB_OWNER = "dpromstk2000-lab";
  const API_BASE =
    "https://cbknucemarcpbscirzyv.supabase.co/functions/v1/eye-product-ready-v2";

  const pageBase = `https://${GITHUB_OWNER}.github.io/${REPOSITORY_NAME}/`;

  const bootUrl = new URL(location.href);
  const bootIsDemo = bootUrl.searchParams.get("demo") === "1";
  if (!bootIsDemo && bootUrl.searchParams.has("line_user_id")) {
    bootUrl.searchParams.delete("line_user_id");
    history.replaceState(null, "", bootUrl.pathname + bootUrl.search + bootUrl.hash);
  }

  const CONFIG = Object.freeze({
    PRODUCT_NAME: "DPRO まつげ・眉サロン LINE",
    PRODUCT_NAME_EN: "DPRO EYE SALON LINE",
    VERSION: "EYE-22-DPRO-NEXT-STANDARD-LOCK-20260723",
    PRODUCT_READY_WORKER_VERSION:
      "EYE-PR-EDGE-2.2-LIMITED-STAFF-20260822",
    PRODUCT_READY_DATABASE_VERSION:
      "EYE-11-MIGRATION-SCHEMA-20260718",
    PRODUCT_READY_ADAPTER_VERSION: "DPRO-CONTROL-ADAPTER-1.0",
    SHOP_CODE: "dpro_eye_demo",
    TIMEZONE: "Asia/Tokyo",
    SLOT_MINUTES: 30,

    API_BASE,
    PAGE_BASE: pageBase,
    GITHUB_REPOSITORY:
      `https://github.com/${GITHUB_OWNER}/${REPOSITORY_NAME}`,

    PAGES: Object.freeze({
      home: `${pageBase}`,
      reservation: `${pageBase}index.html`,
      member: `${pageBase}member.html`,
      owner: `${pageBase}owner.html`,
      owner_ipad: `${pageBase}owner-ipad.html`,
      staff_ipad_login: `${pageBase}staff-ipad-login.html`,
      settings: `${pageBase}settings.html`,
      business_calendar: `${pageBase}business-calendar.html`,
      system_check: `${pageBase}system-check.html`,
      release_check: `${pageBase}release-check.html`,
      migration: `${pageBase}migration.html`,
      delivery: `${pageBase}delivery.html`,
      production_clone: `${pageBase}production-clone.html`,
      production_starter: `${pageBase}production-starter.html`,
      next_standard: `${pageBase}dpro-next-standard.html`,
    }),

    API: Object.freeze({
      root: `${API_BASE}/`,
      health: `${API_BASE}/api/health`,
      shop: `${API_BASE}/api/public/shop`,
      services: `${API_BASE}/api/public/services`,
      staff: `${API_BASE}/api/public/staff`,
      availability: `${API_BASE}/api/public/availability`,
      customer_lookup: `${API_BASE}/api/public/customer.lookup`,
      customer_upsert: `${API_BASE}/api/public/customer.upsert`,
      reservation_create: `${API_BASE}/api/public/reservation.create`,
      reservation_lookup: `${API_BASE}/api/public/reservation.lookup`,
      reservation_reschedule:
        `${API_BASE}/api/public/reservation.reschedule`,
      member_reservations: `${API_BASE}/api/member/reservations`,

      staff_login: `${API_BASE}/api/product-ready/staff/login`,
      staff_me: `${API_BASE}/api/product-ready/staff/me`,

      admin_login: `${API_BASE}/api/admin/login`,
      admin_dashboard: `${API_BASE}/api/admin/dashboard`,
      admin_customer_search: `${API_BASE}/api/admin/customers/search`,
      admin_customer_detail: `${API_BASE}/api/admin/customer.detail`,
      admin_reservation_create:
        `${API_BASE}/api/admin/reservation.create`,
      admin_reservation_status:
        `${API_BASE}/api/admin/reservation.status`,
      admin_carte_save: `${API_BASE}/api/admin/carte.save`,
      admin_carte_photo_upload:
        `${API_BASE}/api/admin/carte.photo.upload`,
      admin_followups: `${API_BASE}/api/admin/followups`,
      admin_followup_status:
        `${API_BASE}/api/admin/followup.status`,
      admin_demo_prepare: `${API_BASE}/api/admin/demo-prepare`,
      admin_system_check: `${API_BASE}/api/admin/system-check`,
      admin_release_check:
        `${API_BASE}/api/admin/release-check`,
      admin_demo_restore:
        `${API_BASE}/api/admin/demo-restore`,
      admin_business_calendar:
        `${API_BASE}/api/admin/business-calendar`,

      migration_link_request:
        `${API_BASE}/api/public/migration/link.request`,
      migration_link_confirm:
        `${API_BASE}/api/public/migration/link.confirm`,
      admin_migrations: `${API_BASE}/api/admin/migrations`,
      admin_migration_batch:
        `${API_BASE}/api/admin/migration/batch`,
      admin_migration_customer_preview:
        `${API_BASE}/api/admin/migration/customer.preview`,
      admin_migration_customer_commit:
        `${API_BASE}/api/admin/migration/customer.commit`,
      admin_migration_reservation_preview:
        `${API_BASE}/api/admin/migration/reservation.preview`,
      admin_migration_reservation_commit:
        `${API_BASE}/api/admin/migration/reservation.commit`,
      admin_migration_discard:
        `${API_BASE}/api/admin/migration/discard`,
      admin_migration_rollback:
        `${API_BASE}/api/admin/migration/rollback`,
      admin_migration_line_links:
        `${API_BASE}/api/admin/migration/line-links`,
      admin_migration_line_link_review:
        `${API_BASE}/api/admin/migration/line-link.review`,
      admin_migration_cutover:
        `${API_BASE}/api/admin/migration/cutover`,

      admin_settings: `${API_BASE}/api/admin/settings`,
      admin_settings_shop_save:
        `${API_BASE}/api/admin/settings/shop.save`,
      admin_settings_staff_save:
        `${API_BASE}/api/admin/settings/staff.save`,
      admin_settings_staff_services_save:
        `${API_BASE}/api/admin/settings/staff.services.save`,
      admin_settings_staff_shift_save:
        `${API_BASE}/api/admin/settings/staff.shift.save`,
      admin_settings_staff_closed_save:
        `${API_BASE}/api/admin/settings/staff.closed.save`,
      admin_settings_staff_closed_delete:
        `${API_BASE}/api/admin/settings/staff.closed.delete`,
      admin_settings_category_save:
        `${API_BASE}/api/admin/settings/category.save`,
      admin_settings_service_save:
        `${API_BASE}/api/admin/settings/service.save`,
      admin_settings_resource_save:
        `${API_BASE}/api/admin/settings/resource.save`,
    }),

    STORAGE_KEYS: Object.freeze({
      admin_code: "dpro_eye_admin_code",
      staff_session: "dpro_eye_staff_session",
      staff_session_expires: "dpro_eye_staff_session_expires",
    }),

    DEMO: Object.freeze({
      admin_code: "1234",
      auto_fill_query: "demo=1",
      line_user_id: "U_EYE_DEMO_001",
    }),

    LINE: Object.freeze({
      LIFF_ID: "2010751563-EOQYvpUA",
      use_liff_when_configured: true,
    }),

    UI: Object.freeze({
      colors: Object.freeze({
        background: "#FAF7F2",
        surface: "#FFFFFF",
        surface_soft: "#F2EAE5",
        accent: "#A86F7D",
        accent_dark: "#6F4C55",
        text: "#2F2B2C",
        muted: "#6E6567",
        border: "#DED1CA",
        success: "#64745F",
        warning: "#A96F32",
        danger: "#A14E55",
      }),
      pc_body_px: 17,
      mobile_body_px: 16,
      button_height_px: 52,
    }),
  });

  window.DPRO_EYE_CONFIG = CONFIG;

  const nativeFetch = window.fetch.bind(window);
  const staffRoutes = new Set([
    "GET /api/admin/dashboard",
    "GET /api/admin/customers/search",
    "GET /api/admin/customer.detail",
    "PATCH /api/admin/reservation.status",
    "POST /api/admin/carte.save",
    "POST /api/admin/carte.photo.upload",
  ]);

  function logicalApiPath(url) {
    const prefix = "/functions/v1/eye-product-ready-v2";
    return url.pathname.startsWith(prefix)
      ? url.pathname.slice(prefix.length) || "/"
      : url.pathname;
  }

  function currentStaffSession() {
    const token = sessionStorage.getItem(CONFIG.STORAGE_KEYS.staff_session) || "";
    const expires = Date.parse(
      sessionStorage.getItem(CONFIG.STORAGE_KEYS.staff_session_expires) || ""
    );
    if (!token) return "";
    if (Number.isFinite(expires) && expires <= Date.now()) {
      sessionStorage.removeItem(CONFIG.STORAGE_KEYS.staff_session);
      sessionStorage.removeItem(CONFIG.STORAGE_KEYS.staff_session_expires);
      return "";
    }
    return token;
  }

  function lineIdToken() {
    if (bootIsDemo) return "";
    try {
      if (!window.liff?.isLoggedIn?.()) return "";
      return window.liff?.getIDToken?.() || "";
    } catch {
      return "";
    }
  }

  window.fetch = async (input, options = {}) => {
    const rawUrl =
      input instanceof Request ? input.url :
      input instanceof URL ? input.href : String(input);
    let url;
    try {
      url = new URL(rawUrl, location.href);
    } catch {
      return nativeFetch(input, options);
    }

    if (!url.href.startsWith(API_BASE)) {
      return nativeFetch(input, options);
    }

    const method = String(
      options.method || (input instanceof Request ? input.method : "GET")
    ).toUpperCase();
    const path = logicalApiPath(url);
    const requestKey = `${method} ${path}`;
    const staffMode =
      new URLSearchParams(location.search).get("staff") === "1";
    const staffToken = currentStaffSession();

    if (
      staffMode && staffToken &&
      method === "POST" && path === "/api/admin/login"
    ) {
      return new Response(
        JSON.stringify({ ok:true, authenticated:true, staff_session:true }),
        {
          status:200,
          headers:{ "Content-Type":"application/json; charset=utf-8" },
        }
      );
    }

    const headers = new Headers(
      options.headers || (input instanceof Request ? input.headers : undefined)
    );

    const idToken = lineIdToken();
    if (idToken) headers.set("X-DPRO-LINE-ID-TOKEN", idToken);

    if (staffMode && staffToken && staffRoutes.has(requestKey)) {
      headers.delete("X-DPRO-ADMIN-CODE");
      headers.set("Authorization", `Bearer ${staffToken}`);
    }

    return nativeFetch(input, { ...options, headers });
  };

  document.addEventListener("DOMContentLoaded", () => {
    const pathname = location.pathname;
    const params = new URLSearchParams(location.search);
    const staffMode = params.get("staff") === "1";
    const staffToken = currentStaffSession();

    if (pathname.endsWith("/settings.html")) {
      const actions = document.querySelector(".top-actions");
      if (actions && !document.getElementById("productReadyCalendarLink")) {
        const a = document.createElement("a");
        a.id = "productReadyCalendarLink";
        a.textContent = "臨時休業・特別営業";
        a.href = params.get("demo") === "1"
          ? "./business-calendar.html?demo=1"
          : "./business-calendar.html";
        actions.prepend(a);
      }
    }

    if (
      pathname.endsWith("/owner-ipad.html") &&
      staffMode && staffToken && params.get("demo") !== "1"
    ) {
      const input = document.getElementById("loginCode");
      const button = document.getElementById("loginButton");
      if (input && button) {
        input.value = "staff-session";
        button.click();
        setTimeout(
          () => localStorage.removeItem(CONFIG.STORAGE_KEYS.admin_code),
          500
        );
      }
    }
  });
})();
