export type Locale = (typeof locales)[number];

export const locales = ["en-US", "es-US"] as const;
export const defaultLocale: Locale = "en-US";
