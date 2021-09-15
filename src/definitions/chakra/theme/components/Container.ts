import {ComponentStyleConfig} from '@chakra-ui/theme'
import {mode} from '@chakra-ui/theme-tools'

export const Container: ComponentStyleConfig = Object.freeze({
  baseStyle: {
    maxW: {
      base: 'full',
      sm: 'container.sm',
      md: 'container.md',
      lg: 'container.lg',
      xl: 'container.xl',
    },
    alignSelf: 'center',
  },
  variants: {
    wireframe: (props) => ({
      border: '1px dashed red',
      _before: {
        content: '"Container"',
        backgroundColor: mode('red.100', 'red.800')(props),
        ml: -4,
        px: 2,
      },
    }),
  },
})
