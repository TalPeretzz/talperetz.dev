export interface CookieCategory {
  id: string;
  label: string;
  description: string;
  required: boolean;
}

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}
