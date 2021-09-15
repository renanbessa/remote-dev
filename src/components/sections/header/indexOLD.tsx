import React from 'react'
import Link from 'next/link'
import {useTranslation} from 'next-i18next'
import {Logo} from '@components/ui/logo'
import {HeaderProps} from './types'
import * as C from '@chakra-ui/react'
import * as I from '@chakra-ui/icons'

const MenuItems = ({children, isLast, to = '/', ...rest}: HeaderProps) => {
  return (
    <C.ListItem
      mb={{base: isLast ? 0 : 8, sm: 0}}
      mr={{base: 0, sm: isLast ? 0 : 8}}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </C.ListItem>
  )
}

export const Header = (props: C.FlexProps) => {
  const {t} = useTranslation('navbar')
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <C.Flex
      as="header"
      justify="center"
      pos="fixed"
      top="0"
      w="100%"
      minH={'60px'}
      boxShadow="sm"
      zIndex={999}
      bg={'transparent'}
      {...props}
    >
      <C.Container display="flex" alignItems="center">
        <C.Box display={{base: 'block', md: 'none'}} onClick={toggleMenu}>
          {show ? <I.CloseIcon /> : <I.HamburgerIcon />}
        </C.Box>

        <C.Flex flex={[1, 'auto']}>
          <Logo />
        </C.Flex>

        <C.Flex
          as="nav"
          align={'center'}
          justify={'flex-end'}
          flex={[1, 'auto']}
        >
          <C.List display={{base: show ? 'flex' : 'none', md: 'flex'}}>
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
          </C.List>
        </C.Flex>
      </C.Container>
    </C.Flex>
  )
}
