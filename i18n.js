const NextI18Next = require('next-i18next').default
const {localeSubpaths} = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
  otherLanguages: process.env.NEXT_PUBLIC_LOCALES?.split(','),
  defaultLanguage: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
  localeSubpaths,
  localePath: path.resolve('./public/locales'),
})
