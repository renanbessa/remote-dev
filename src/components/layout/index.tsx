import {Header} from '@components/sections/header'
import {Footer} from '@components/sections/footer'
import * as C from '@chakra-ui/react'

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <C.Flex direction="column" minH="100vh">
      <Header />
      {children}
      <C.Spacer />
      <Footer />
    </C.Flex>
  )
}
