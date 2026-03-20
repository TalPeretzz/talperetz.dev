import type { CookieCategory } from "@/types/cookies";

export const cookieCategories: CookieCategory[] = [
  {
    id: "necessary",
    label: "Necessary",
    description: "Essential cookies required for the website to function properly. These cannot be disabled.",
    required: true,
  },
  {
    id: "analytics",
    label: "Analytics",
    description: "Cookies that help understand how visitors interact with the website, used to improve the experience.",
    required: false,
  },
  {
    id: "marketing",
    label: "Marketing",
    description: "Cookies used to deliver relevant advertisements and track campaign effectiveness.",
    required: false,
  },
];
