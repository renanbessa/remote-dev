import * as C from '@chakra-ui/react'
import * as I from '@chakra-ui/icons'
import {useColorModeValue, useDisclosure} from '@chakra-ui/react'
import {Logo} from '@components/ui/logo'
import {useTranslation} from 'next-i18next'
import React, {useEffect, useState} from 'react'
import {useScroll} from '@hooks/useScroll'
import {DesktopNavProps, NavItemProps} from './types'

export const Header = () => {
  const {isOpen, onToggle} = useDisclosure()

  const {t} = useTranslation('navbar')

  const {onCross} = useScroll()
  const [hasBackground, setHasBackground] = useState(false)

  useEffect(() => {
    const listener = onCross({
      offset: 30,
      callback: (e) => setHasBackground(e.isAbove),
    })

    setHasBackground(listener.current.isAbove)
  }, [])

  return (
    <C.Box>
      <C.Flex
        as={'header'}
        bg={useColorModeValue(
          hasBackground ? 'white' : 'transparent',
          'gray.800'
        )}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        align={'center'}
        pos="fixed"
        top="0"
        w="100%"
        py={5}
      >
        <C.Container display="flex" alignItems="center">
          <C.Flex
            flex={{base: 1, md: 'auto'}}
            ml={{base: -2}}
            display={{base: 'flex', md: 'none'}}
          >
            <C.IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <I.CloseIcon w={3} h={3} />
                ) : (
                  <I.HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              color={useColorModeValue(
                hasBackground ? 'black' : 'white',
                'gray.800'
              )}
            />
          </C.Flex>

          <C.Flex flex={{base: 1}} justify={{base: 'center', md: 'start'}}>
            <Logo />
          </C.Flex>

          <C.Flex as={'nav'} display={{base: 'none', md: 'flex'}} mr={10}>
            <DesktopNav hasBackground={hasBackground} />
          </C.Flex>

          <C.Stack
            flex={{base: 1, md: 0}}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <C.Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'red.500'}
              href={'#'}
              _hover={{
                bg: 'red.400',
              }}
            >
              {t('postJob.title')}
            </C.Button>
          </C.Stack>
        </C.Container>
      </C.Flex>
    </C.Box>
  )
}

const DesktopNav = ({hasBackground}: DesktopNavProps) => {
  const {t} = useTranslation('navbar')
  const linkColor = useColorModeValue(
    hasBackground ? 'black' : 'white',
    'gray.200'
  )
  const linkHoverColor = useColorModeValue('gray.400', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  const navItems = t<string, NavItemProps[]>('menu', {returnObjects: true})

  return (
    <C.List display={'flex'} alignItems={'center'}>
      {navItems?.map((item: NavItemProps, index: number) => (
        <C.ListItem key={index}>
          <C.Popover trigger={'hover'} placement={'bottom-start'}>
            <C.PopoverTrigger>
              <C.Link
                p={3}
                href={item.href ?? '#'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {item.label}
              </C.Link>
            </C.PopoverTrigger>
          </C.Popover>
        </C.ListItem>
      ))}
    </C.List>
  )
}
