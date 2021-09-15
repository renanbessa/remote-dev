import i18n from '@i18n'
import {get} from 'lodash'
import {i18n as i18next} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

/**
 * Populate the necessary i18n config to export to client
 * and the serverTranslation helper function
 */
export async function populateI18n(locale?: string, namespaces?: string[]) {
  if (process.env.NODE_ENV === 'development') {
    await i18next?.reloadResources()
  }

  const config = await serverSideTranslations(locale ?? '', namespaces, {
    i18n: i18n as any,
  })

  const serverTranslation = (namespace: string) => {
    const store =
      config._nextI18Next.initialI18nStore?.[locale ?? '']?.[namespace] ?? {}
    const translate = (path: string) => get(store, path, path)
    return {translate}
  }

  return {
    ...config,
    serverTranslation,
  }
}
