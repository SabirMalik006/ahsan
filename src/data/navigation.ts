export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#why' },
  { label: 'Programs', href: '#programs' },
  { label: 'Courses', href: '#library' },
  { label: 'Scholars', href: '#scholars' },
  { label: 'Resources', href: '#library' },
  { label: 'Community', href: '#community' },
]

export type FooterColumn = { title: string; links: { label: string; href: string }[] }

export const footerColumns: FooterColumn[] = [
  {
    title: 'Learn',
    links: [
      { label: 'Courses', href: '#library' },
      { label: 'Programs', href: '#programs' },
      { label: 'Qur’an', href: '#programs' },
      { label: 'Arabic', href: '#programs' },
      { label: 'Islamic Studies', href: '#journey' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Scholars', href: '#scholars' },
      { label: 'Events', href: '#community' },
      { label: 'Community', href: '#community' },
      { label: 'Resources', href: '#library' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Mission', href: '#why' },
      { label: 'About Us', href: '#why' },
      { label: 'Contact', href: '#footer' },
      { label: 'FAQs', href: '#footer' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#footer' },
      { label: 'Terms', href: '#footer' },
    ],
  },
]
