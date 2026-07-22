(() => {
  "use strict";

  const REPOSITORY_NAME = "dpro-eye-salon-line";
  const GITHUB_OWNER = "dpromstk2000-lab";
  const API_BASE = "https://dpro-eye-salon-line-api.dpromstk2000.workers.dev";

  const pageBase = `https://${GITHUB_OWNER}.github.io/${REPOSITORY_NAME}/`;

  window.DPRO_EYE_CONFIG = Object.freeze({
    PRODUCT_NAME: "DPRO まつげ・眉サロン LINE",
    PRODUCT_NAME_EN: "DPRO EYE SALON LINE",
    VERSION: "EYE-12-R3-EMERGENCY-ROLLBACK-20260722",
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
      settings: `${pageBase}settings.html`,
      system_check: `${pageBase}system-check.html`,
      release_check: `${pageBase}release-check.html`,
      migration: `${pageBase}migration.html`,
    }),

    API: Object.freeze({
      root: `${API_BASE}/`,
      health: `${API_BASE}/health`,
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
})();
