export const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0?cid=ODJmMDg1MTcxMmJmMjA5MDYzNjExZWVkNDAxOTZjNDQ3ZDkwODZkMDQ5YjA3ODE2ZmU4ODk1YTYxZGNjNTBiOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";

export const RENT = "$1,125";

/** Public Drive folder with every photo plus the realtor's video walkthrough. */
export const DRIVE_FOLDER_URL =
  "https://drive.google.com/drive/folders/1lYL1poVgCLjzN3RKQTLnAHE3mSTp4JFq";

/** The realtor's .mov walkthrough of the empty house, hosted on Drive. */
export const VIDEO_TOUR_URL =
  "https://drive.google.com/file/d/1fV_eQuwRP036wSWC8mnMjaII1VoqlARB/view";

/** The cost-sharing guide we follow. */
export const SUPERNUCLEAR_FINANCE_GUIDE_URL =
  "https://supernuclear.substack.com/p/managing-finances-in-a-coliving-house";

/** Pool — successor to Braid (the app the Supernuclear guide recommends), by the same team. We use it to pool money for shared purchases. */
export const POOLMONEY_URL = "https://app.poolmoney.com";

export const CONTACT_TOPICS = [
  "Residency inquiry",
  "Short-term stay request",
  "Visit or event",
  "Other",
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number];

export const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#calendar", label: "Calendar" },
  { href: "/live", label: "Live here" },
  { href: "/residents", label: "Residents" },
  { href: "/contact", label: "Contact" },
] as const;
