import React from 'react'
import * as C from '@chakra-ui/react'
import {LogoIcon} from '@components/ui/icons'

export const Logo = () => {
  return (
    <C.Stack as="a" href="/">
      <LogoIcon width={32} height={32} />
    </C.Stack>
  )
}
