export const localeCodes = [
  "ja",
  "en",
  "zh-cn",
  "zh-tw",
  "ko",
  "es",
  "fr",
  "de",
  "pt-br",
] as const;

export type Locale = (typeof localeCodes)[number];

export const defaultLocale: Locale = "ja";
export const additionalLocales = [
  "zh-cn",
  "zh-tw",
  "ko",
  "es",
  "fr",
  "de",
  "pt-br",
] as const satisfies readonly Locale[];

export type AdditionalLocale = (typeof additionalLocales)[number];

interface LocaleMeta {
  label: string;
  htmlLang: string;
  hreflang: string;
  ogLocale: string;
  dateLocale: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  ja: {
    label: "日本語",
    htmlLang: "ja",
    hreflang: "ja",
    ogLocale: "ja_JP",
    dateLocale: "ja-JP",
  },
  en: {
    label: "English",
    htmlLang: "en",
    hreflang: "en",
    ogLocale: "en_US",
    dateLocale: "en-US",
  },
  "zh-cn": {
    label: "简体中文",
    htmlLang: "zh-Hans",
    hreflang: "zh-Hans",
    ogLocale: "zh_CN",
    dateLocale: "zh-CN",
  },
  "zh-tw": {
    label: "繁體中文",
    htmlLang: "zh-Hant",
    hreflang: "zh-Hant",
    ogLocale: "zh_TW",
    dateLocale: "zh-TW",
  },
  ko: {
    label: "한국어",
    htmlLang: "ko",
    hreflang: "ko",
    ogLocale: "ko_KR",
    dateLocale: "ko-KR",
  },
  es: {
    label: "Español",
    htmlLang: "es",
    hreflang: "es",
    ogLocale: "es_ES",
    dateLocale: "es-ES",
  },
  fr: {
    label: "Français",
    htmlLang: "fr",
    hreflang: "fr",
    ogLocale: "fr_FR",
    dateLocale: "fr-FR",
  },
  de: {
    label: "Deutsch",
    htmlLang: "de",
    hreflang: "de",
    ogLocale: "de_DE",
    dateLocale: "de-DE",
  },
  "pt-br": {
    label: "Português (Brasil)",
    htmlLang: "pt-BR",
    hreflang: "pt-BR",
    ogLocale: "pt_BR",
    dateLocale: "pt-BR",
  },
};

const nonDefaultLocalePattern = new RegExp(
  `^/(?:${localeCodes.filter((locale) => locale !== defaultLocale).join("|")})(?=/|$)`,
);

export function getLocalePrefix(locale: Locale) {
  return locale === defaultLocale ? "" : `/${locale}`;
}

export function getLocalizedPath(pathname: string, targetLocale: Locale) {
  const unprefixedPath = pathname.replace(nonDefaultLocalePattern, "") || "/";
  const defaultPath =
    unprefixedPath === "/404/" ? "/404.html" : unprefixedPath;

  if (targetLocale === defaultLocale) return defaultPath;

  const localizedPath = defaultPath === "/404.html" ? "/404/" : defaultPath;
  return `/${targetLocale}${localizedPath === "/" ? "/" : localizedPath}`;
}

export function isLocale(value: string): value is Locale {
  return localeCodes.includes(value as Locale);
}
