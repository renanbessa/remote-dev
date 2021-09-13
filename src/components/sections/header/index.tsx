import React from 'react'
import Link from 'next/link'
import {useTranslation} from 'next-i18next'
import {Logo} from '@components/ui/logo'
import {HeaderProps} from './types'
import * as C from '@chakra-ui/react'
import * as I from '@chakra-ui/icons'

const MenuItems = ({children, isLast, to = '/', ...rest}: HeaderProps) => {
  return (
    <C.Text
      mb={{base: isLast ? 0 : 8, sm: 0}}
      mr={{base: 0, sm: isLast ? 0 : 8}}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </C.Text>
  )
}

export const Header = (props: C.FlexProps) => {
  const {t} = useTranslation('navbar')
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <C.Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      <C.Flex align="center">
        <Logo
          w="100px"
          color={['white', 'white', 'primary.500', 'primary.500']}
        />
      </C.Flex>

      <C.Box display={{base: 'block', md: 'none'}} onClick={toggleMenu}>
        {show ? <I.CloseIcon /> : <I.HamburgerIcon />}
      </C.Box>

      <C.Box
        display={{base: show ? 'block' : 'none', md: 'block'}}
        flexBasis={{base: '100%', md: 'auto'}}
      >
        <C.Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">{t('menu.home')}</MenuItems>
          <MenuItems to="/how">{t('menu.categories')}</MenuItems>
          <MenuItems to="/faetures">{t('menu.blog')}</MenuItems>
          <MenuItems to="/signup" isLast>
            <C.Button
              size="sm"
              rounded="md"
              color={['primary.500', 'primary.500', 'white', 'white']}
              bg={['white', 'white', 'primary.500', 'primary.500']}
              _hover={{
                bg: [
                  'primary.100',
                  'primary.100',
                  'primary.600',
                  'primary.600',
                ],
              }}
            >
              {t('post-job.title')}
            </C.Button>
          </MenuItems>
        </C.Flex>
      </C.Box>
    </C.Flex>
  )
}
