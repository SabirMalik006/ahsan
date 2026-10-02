export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About / Our Vision', href: '/about-vision' },
  { label: 'Our Framework', href: '/holistic-framework' },
  { label: 'Our Initiatives', href: '/initiatives' },
  { label: 'Programs', href: '/programs' },
  { label: 'Contact', href: '/contact' },
] as const

export const footerColumns = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Initiatives', href: '/initiatives' },
    ],
  },
  {
    title: 'Academy',
    links: [
      { label: 'Our Vision', href: '/about-vision' },
      { label: 'Our Philosophy', href: '/philosophy' },
      { label: 'Our Framework', href: '/holistic-framework' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { label: 'All Programs', href: '/programs' },
      { label: 'Register', href: '/register' },
    ],
  },
  {
    title: 'Connect',
    links: [{ label: 'Contact', href: '/contact' }],
  },
] as const

export type NavLinkItem = (typeof navLinks)[number]
