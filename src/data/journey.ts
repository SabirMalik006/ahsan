import {
  BookOpen,
  BookMarked,
  Compass,
  GraduationCap,
  HeartHandshake,
  Languages,
  Landmark,
  LibraryBig,
  ScrollText,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react'

export type JourneyStage = {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export const journeyStages: JourneyStage[] = [
  {
    number: '01',
    title: 'Foundations',
    description: 'Creed, purification and the essential knowledge every learner begins with.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Qur’an',
    description: 'Recitation, memorisation and tafsir that returns the Qur’an to daily life.',
    icon: BookOpen,
  },
  {
    number: '03',
    title: 'Sunnah',
    description: 'Hadith sciences and the prophetic example, studied with context and care.',
    icon: ScrollText,
  },
  {
    number: '04',
    title: 'Arabic',
    description: 'The language of revelation — grammar, vocabulary and comprehension.',
    icon: Languages,
  },
  {
    number: '05',
    title: 'Islamic Sciences',
    description: 'Fiqh, usul, and the classical disciplines that structure sound understanding.',
    icon: Landmark,
  },
  {
    number: '06',
    title: 'Spiritual Development',
    description: 'Tazkiyah, character and the inner work of living with intention.',
    icon: Sparkles,
  },
  {
    number: '07',
    title: 'Family & Community',
    description: 'Marriage, parenting and community life shaped by revealed guidance.',
    icon: HeartHandshake,
  },
  {
    number: '08',
    title: 'Lifelong Learning',
    description: 'Advanced circles, ijazah tracks and continuous scholarship.',
    icon: GraduationCap,
  },
]

export type Feature = {
  title: string
  description: string
  icon: LucideIcon
  /** Drives the asymmetric grid and visual weight of each card. */
  span: 'wide' | 'tall' | 'default'
  stat?: string
}

export const features: Feature[] = [
  {
    title: 'Authentic Knowledge',
    description:
      'Every course is traced to recognised scholarship, with sources cited and chains of transmission respected.',
    icon: BookMarked,
    span: 'wide',
    stat: 'Verified isnād',
  },
  {
    title: 'Structured Learning',
    description: 'Eight progressive stages take you from first principles to advanced study.',
    icon: LibraryBig,
    span: 'tall',
  },
  {
    title: 'Scholar-Led Guidance',
    description: 'Learn from teachers who carry the tradition and teach it with clarity.',
    icon: GraduationCap,
    span: 'default',
  },
  {
    title: 'Practical Application',
    description: 'Every module ends with how the knowledge changes your week, not just your notes.',
    icon: Compass,
    span: 'default',
  },
  {
    title: 'Family Growth',
    description: 'Paths designed for households to learn together, at their own pace.',
    icon: Users,
    span: 'default',
  },
  {
    title: 'Global Community',
    description: 'Study circles spanning 30+ countries, from Cairo to Toronto to Kuala Lumpur.',
    icon: HeartHandshake,
    span: 'wide',
  },
]
