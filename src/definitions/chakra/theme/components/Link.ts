import {ComponentStyleConfig} from '@chakra-ui/theme'

export const Link: ComponentStyleConfig = Object.freeze({
  variants: {
    basic: () => ({
      textDecoration: 'none',
      _hover: {
        color: 'palette.primary',
        textDecoration: 'none',
      },
    }),
  },
})
