export const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0?cid=ODJmMDg1MTcxMmJmMjA5MDYzNjExZWVkNDAxOTZjNDQ3ZDkwODZkMDQ5YjA3ODE2ZmU4ODk1YTYxZGNjNTBiOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";

export const RENT_PLACEHOLDER = "$9999";

export const CONTACT_TOPICS = [
  "Residency inquiry",
  "Visit or event",
  "Other",
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number];

export const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "house", label: "The house" },
  { id: "living", label: "Living here" },
  { id: "philadelphia", label: "Philadelphia" },
  { id: "calendar", label: "Calendar" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
] as const;
