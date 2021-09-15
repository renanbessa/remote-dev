export const i18n: any = {
  localeDetection: false,
  locales: process.env.NEXT_PUBLIC_LOCALES?.split(','),
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
}
export default i18n
