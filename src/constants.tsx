export const AUTH_COOKIE = "auth";
export const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export const PAGES = {
  LOGIN: "/",
  LOGOUT: "/logout",
  DASHBOARD: "/dashboard",
  STEP1: (showId: number) => `/steps/1?showID=${showId}`,
  SIMPLE_STEP1: "/steps/1",
  STEP2: "/steps/2",
  SUMMARY: "/summary",
  HELP: "/help",
  ADMIN: "/admin",
  EXPERIENCE: "/experience",
  EXPERIENCE_SUCCESS: "/experience/success",
};
