import {extendTheme} from '@chakra-ui/react'

import styles from './styles'
import {config} from './config'

import {colors} from './foundations/colors'
import {sizes} from './foundations/sizes'
import {fonts} from './foundations/fonts'

import {Container} from './components/Container'
import {JobCard} from './components/JobCard'

/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */

const overrides = {
  ...styles,
  config,
  colors,
  sizes,
  fonts,

  components: {
    Container,
    JobCard,
  },
}

const theme = extendTheme(overrides)

export default theme
