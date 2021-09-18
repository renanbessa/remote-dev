export interface HeaderProps {
  children: React.ReactNode
  isLast?: boolean
  to: string
}

export interface DesktopNavProps {
  hasBackground?: boolean
}

export interface NavItemProps {
  label: string
  href: string
}

export interface NavLinkProps {
  children: React.ReactNode
  href: string
}
