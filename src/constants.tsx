export const AUTH_COOKIE = "auth";
export const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export const PAGES = {
  LOGIN: "/",
  LOGOUT: "/logout",
  DASHBOARD: "/dashboard",
  SIMPLE_STEP1: "/steps/1",
  SIMLE_STEP2: "/steps/2",
  STEP1: (showId: number) => `/steps/1?showID=${showId}`,
  STEP2: (showId: number) => `/steps/2?showID=${showId}`,
  SUMMARY: (showId: number) => `/summary?showID=${showId}`,
  ADMIN: "/admin",
  EXPERIENCE: "/experience",
  SIMPLE_EXPERIENCE_SUCCESS: "/simple-experience",
  EXPERIENCE_SUCCESS: (firstName: string) => `/experience/success?firstName=${firstName}`,
  ATTENDEE_LIST: "/attendee-list",
  API_SEND_EMAIL: "/api/send-emails",
  API_UPDATE_SHOW: "/api/update-show-status",
};
