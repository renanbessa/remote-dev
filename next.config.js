const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([], {
  i18n: {
    localeDetection: false,
    locales: process.env.NEXT_PUBLIC_LOCALES?.split(','),
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
  },
})
