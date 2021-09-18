import React, {useEffect, useState} from 'react'
import * as C from '@chakra-ui/react'
import * as I from '@chakra-ui/icons'
import {useColorModeValue, useDisclosure} from '@chakra-ui/react'
import {useScroll} from '@hooks/useScroll'
import {useTranslation} from 'next-i18next'
import {NavLinkProps, NavItemProps} from './types'
import {Logo} from '@components/ui/logo'

const NavLink = ({children, href}: NavLinkProps) => (
  <C.Link
    p={3}
    fontWeight={500}
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('gray.400', 'white'),
    }}
    href={href}
  >
    {children}
  </C.Link>
)

export const Header = () => {
  const {isOpen, onToggle} = useDisclosure()

  const {t} = useTranslation('navbar')

  const navItems = t<string, NavItemProps[]>('menu', {returnObjects: true})

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
    <>
      <C.Box
        as={'header'}
        bg={useColorModeValue(
          hasBackground ? 'white' : 'transparent',
          'gray.800'
        )}
        pos="fixed"
        top="0"
        zIndex="1000"
        w={'100%'}
        boxShadow={hasBackground ? 'lg' : ''}
      >
        <C.Container>
          <C.Flex
            minH={16}
            align={'center'}
            justifyContent={'space-between'}
            color={useColorModeValue('gray.600', 'white')}
            py={5}
          >
            <C.IconButton
              size={'md'}
              icon={
                isOpen ? (
                  <I.CloseIcon w={3} h={3} />
                ) : (
                  <I.HamburgerIcon w={5} h={5} />
                )
              }
              aria-label={'Open Menu'}
              display={{md: 'none'}}
              onClick={onToggle}
              color={useColorModeValue(
                hasBackground ? 'black' : 'white',
                'gray.800'
              )}
              bg={useColorModeValue(
                hasBackground ? 'white' : 'transparent',
                'gray.800'
              )}
            />
            <C.HStack spacing={8} alignItems={'center'}>
              <C.Box>
                <Logo />
              </C.Box>
              <C.HStack
                as={'nav'}
                spacing={4}
                display={{base: 'none', md: 'flex'}}
                color={useColorModeValue(
                  hasBackground ? 'black' : 'white',
                  'gray.800'
                )}
              >
                <C.List>
                  {navItems?.map((item: NavItemProps, index: number) => (
                    <NavLink key={index} href={item.href}>
                      {item.label}
                    </NavLink>
                  ))}
                </C.List>
              </C.HStack>
            </C.HStack>

            <C.Flex alignItems={'center'}>
              <C.Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'green.400'}
                href={t('postJob.href')}
                _hover={{
                  bg: 'green.600',
                }}
              >
                {t('postJob.title')}
              </C.Button>
            </C.Flex>
          </C.Flex>
        </C.Container>

        {isOpen ? (
          <C.Box pb={4} display={{md: 'none'}}>
            <C.Stack
              as={'nav'}
              spacing={4}
              color={useColorModeValue(
                hasBackground ? 'black' : 'white',
                'gray.800'
              )}
            >
              <C.List display={'flex'} flexDirection="column">
                {navItems?.map((item: NavItemProps, index: number) => (
                  <NavLink key={index} href={item.href}>
                    {item.label}
                  </NavLink>
                ))}
              </C.List>
            </C.Stack>
          </C.Box>
        ) : null}
      </C.Box>
    </>
  )
}
