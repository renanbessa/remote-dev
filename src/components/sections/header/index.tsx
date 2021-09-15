import * as C from '@chakra-ui/react'
import * as I from '@chakra-ui/icons'
import {useColorModeValue, useDisclosure} from '@chakra-ui/react'
import {Logo} from '@components/ui/logo'

export const Header = () => {
  const {isOpen, onToggle} = useDisclosure()

  return (
    <C.Box>
      <C.Flex
        as={'header'}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        align={'center'}
        pos="fixed"
        top="0"
        w="100%"
        boxShadow="sm"
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
            />
          </C.Flex>

          <C.Flex flex={{base: 1}} justify={{base: 'center', md: 'start'}}>
            <Logo />

            <C.Flex as={'nav'} display={{base: 'none', md: 'flex'}} ml={10}>
              <DesktopNav />
            </C.Flex>
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
              fontWeight={400}
              variant={'link'}
              href={'#'}
            >
              Sign In
            </C.Button>
            <C.Button
              display={{base: 'none', md: 'inline-flex'}}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}
            >
              Sign Up
            </C.Button>
          </C.Stack>
        </C.Container>
      </C.Flex>

      <C.Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </C.Collapse>
    </C.Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <C.List
      display={'flex'}
      alignItems={'center'}
      spacing={4}
      flexDirection={'row'}
    >
      {NAV_ITEMS.map((navItem) => (
        <C.ListItem as={'li'} key={navItem.label}>
          <C.Popover trigger={'hover'} placement={'bottom-start'}>
            <C.PopoverTrigger>
              <C.Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </C.Link>
            </C.PopoverTrigger>

            {navItem.children && (
              <C.PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <C.Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </C.Stack>
              </C.PopoverContent>
            )}
          </C.Popover>
        </C.ListItem>
      ))}
    </C.List>
  )
}

const DesktopSubNav = ({label, href, subLabel}: NavItem) => {
  return (
    <C.Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{bg: useColorModeValue('pink.50', 'gray.900')}}
    >
      <C.Stack direction={'row'} align={'center'}>
        <C.Box>
          <C.Text
            transition={'all .3s ease'}
            _groupHover={{color: 'pink.400'}}
            fontWeight={500}
          >
            {label}
          </C.Text>
          <C.Text fontSize={'sm'}>{subLabel}</C.Text>
        </C.Box>
        <C.Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{opacity: '100%', transform: 'translateX(0)'}}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <C.Icon color={'pink.400'} w={5} h={5} as={I.ChevronRightIcon} />
        </C.Flex>
      </C.Stack>
    </C.Link>
  )
}

const MobileNav = () => {
  return (
    <C.Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{md: 'none'}}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </C.Stack>
  )
}

const MobileNavItem = ({label, children, href}: NavItem) => {
  const {isOpen, onToggle} = useDisclosure()

  return (
    <C.Stack spacing={4} onClick={children && onToggle}>
      <C.Flex
        py={2}
        as={C.Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <C.Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </C.Text>
        {children && (
          <C.Icon
            as={I.ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </C.Flex>

      <C.Collapse in={isOpen} animateOpacity style={{marginTop: '0!important'}}>
        <C.Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <C.Link key={child.label} py={2} href={child.href}>
                {child.label}
              </C.Link>
            ))}
        </C.Stack>
      </C.Collapse>
    </C.Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Learn Design',
    href: '#',
  },
  {
    label: 'Hire Designers',
    href: '#',
  },
]
