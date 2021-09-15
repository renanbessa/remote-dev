import React from 'react'
import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import theme from '@definitions/chakra/theme'
import '@styles/global.css'
import {Provider} from 'react-redux'
import store from '@redux/store'
import {appWithTranslation} from 'next-i18next'
import i18n from '@i18n'

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default appWithTranslation(MyApp, {i18n})
