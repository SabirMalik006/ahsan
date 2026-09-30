export type Program = {
  id: string
  category: string
  title: string
  description: string
  level: string
  duration: string
  lessons: string
  /** Featured programs occupy larger editorial cells in the masonry grid. */
  featured?: boolean
  tone: 'forest' | 'cream' | 'sage' | 'gold'
}

export const programs: Program[] = [
  {
    id: 'quran-studies',
    category: 'Qur’an',
    title: 'Qur’an Studies',
    description:
      'Recitation with tajwīd, memorisation frameworks and tafsir that moves from verse to lived practice.',
    level: 'Beginner → Advanced',
    duration: '12 weeks',
    lessons: '48 lessons',
    featured: true,
    tone: 'forest',
  },
  {
    id: 'hadith-sunnah',
    category: 'Hadith',
    title: 'Hadith & Sunnah',
    description: 'The science of narration, classification and prophetic guidance in daily life.',
    level: 'Intermediate',
    duration: '8 weeks',
    lessons: '32 lessons',
    tone: 'cream',
  },
  {
    id: 'arabic-language',
    category: 'Arabic',
    title: 'Arabic Language',
    description: 'From letters to sentences — read the Qur’an with understanding, not just sound.',
    level: 'Beginner',
    duration: '16 weeks',
    lessons: '64 lessons',
    tone: 'sage',
  },
  {
    id: 'islamic-law',
    category: 'Fiqh',
    title: 'Islamic Law',
    description: 'Worship, transactions and family law through comparative classical positions.',
    level: 'Intermediate → Advanced',
    duration: '10 weeks',
    lessons: '40 lessons',
    featured: true,
    tone: 'gold',
  },
  {
    id: 'spirituality',
    category: 'Tazkiyah',
    title: 'Islamic Spirituality',
    description: 'Purification of the heart, character refinement and consistent spiritual practice.',
    level: 'All levels',
    duration: '6 weeks',
    lessons: '24 lessons',
    tone: 'cream',
  },
  {
    id: 'family-relationships',
    category: 'Family',
    title: 'Family & Relationships',
    description: 'Marriage, parenting and household life grounded in Qur’an and Sunnah.',
    level: 'All levels',
    duration: '6 weeks',
    lessons: '22 lessons',
    tone: 'sage',
  },
]

export type Scholar = {
  id: string
  name: string
  title: string
  specialization: string
  description: string
  location: string
  /** Portrait placeholder seed — swap for a real image later. */
  seed: number
}

export const scholars: Scholar[] = [
  {
    id: 'scholar-1',
    name: 'Shaykh Yusuf al-Amin',
    title: 'Shaykh al-Hadith',
    specialization: 'Hadith Sciences',
    description:
      'Twenty years teaching the science of narration, with a focus on contextual reading of hadith.',
    location: 'Amman, Jordan',
    seed: 1,
  },
  {
    id: 'scholar-2',
    name: 'Shaykhah Maryam Siddiqui',
    title: 'Senior Instructor',
    specialization: 'Qur’an & Tajwīd',
    description: 'Ijazah-holder in recitation, guiding learners from first letters to memorisation.',
    location: 'Istanbul, Türkiye',
    seed: 2,
  },
  {
    id: 'scholar-3',
    name: 'Dr. Ahmed Rahman',
    title: 'Professor of Fiqh',
    specialization: 'Islamic Law & Usul',
    description: 'Comparative fiqh specialist translating classical rulings into contemporary questions.',
    location: 'Cairo, Egypt',
    seed: 3,
  },
  {
    id: 'scholar-4',
    name: 'Ustadh Bilal Karim',
    title: 'Instructor of Arabic',
    specialization: 'Arabic Language',
    description: 'Modern teaching methods for the language of revelation, after fifteen years in the field.',
    location: 'Kuala Lumpur, Malaysia',
    seed: 4,
  },
]

export type Resource = {
  id: string
  category: string
  type: 'Article' | 'Lecture' | 'Course' | 'Podcast' | 'Guide'
  title: string
  description: string
  readTime: string
  isNew?: boolean
}

export const resourceCategories = [
  'Qur’an',
  'Hadith',
  'Fiqh',
  'Spirituality',
  'Family',
  'Arabic',
  'Youth',
] as const

export const resources: Resource[] = [
  {
    id: 'r1',
    category: 'Qur’an',
    type: 'Course',
    title: 'Reading Sūrah al-Kahf with Attention',
    description: 'A four-part study of structure, theme and the four parables of the sūrah.',
    readTime: '4 lessons',
    isNew: true,
  },
  {
    id: 'r2',
    category: 'Hadith',
    type: 'Article',
    title: 'How to Read a Hadith Without Losing Its Context',
    description: 'Practical principles for understanding narration in its original setting.',
    readTime: '9 min read',
  },
  {
    id: 'r3',
    category: 'Fiqh',
    type: 'Lecture',
    title: 'Intentions and the Everyday Acts of Worship',
    description: 'How niyyah reframes routine work into something that draws you closer.',
    readTime: '58 min',
  },
  {
    id: 'r4',
    category: 'Spirituality',
    type: 'Podcast',
    title: 'Quiet Consistency: Building a Practice That Lasts',
    description: 'A conversation on small, unbroken habits over intense seasons of effort.',
    readTime: '42 min',
    isNew: true,
  },
  {
    id: 'r5',
    category: 'Family',
    type: 'Guide',
    title: 'Teaching Children to Love the Qur’an',
    description: 'An age-by-age guide for parents nurturing recitation at home.',
    readTime: '12 min read',
  },
  {
    id: 'r6',
    category: 'Arabic',
    type: 'Course',
    title: 'The Ten Most Frequent Qur’anic Verb Forms',
    description: 'Learn the patterns that unlock hundreds of verses of understanding.',
    readTime: '10 lessons',
  },
  {
    id: 'r7',
    category: 'Youth',
    type: 'Article',
    title: 'Faith at University: Studying Without Drifting',
    description: 'Holding onto practice through the pressure of campus life.',
    readTime: '7 min read',
  },
  {
    id: 'r8',
    category: 'Spirituality',
    type: 'Guide',
    title: 'A Beginner’s Guide to Tazkiyah',
    description: 'Where spiritual development actually starts, and what to do in week one.',
    readTime: '15 min read',
  },
  {
    id: 'r9',
    category: 'Qur’an',
    type: 'Podcast',
    title: 'Tafsir in Twenty Minutes: Juz’ Amma',
    description: 'The final juz’ explained verse by verse, in plain language.',
    readTime: '12 episodes',
  },
]

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  location: string
  path: string
  seed: number
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Knowledge changed the way I understood my faith — and eventually the way I lived it. I came for one course and stayed for the journey.',
    name: 'Aisha Rahman',
    role: 'Mother of three',
    location: 'Manchester, United Kingdom',
    path: 'Qur’an Studies · Foundation',
    seed: 5,
  },
  {
    id: 't2',
    quote:
      'The structure is what made the difference. Each stage built on the last, and I finally stopped studying randomly.',
    name: 'Omar Faruq',
    role: 'Software engineer',
    location: 'Toronto, Canada',
    path: 'Arabic Language · Beginner',
    seed: 6,
  },
  {
    id: 't3',
    quote:
      'Our whole family studies together now. Dinner conversations changed within a month of starting.',
    name: 'Fatima Sheikh',
    role: 'Teacher',
    location: 'Dubai, UAE',
    path: 'Family & Relationships',
    seed: 7,
  },
  {
    id: 't4',
    quote:
      'Having a scholar respond to my questions directly gave me confidence I had never found on my own.',
    name: 'Ibrahim Diallo',
    role: 'Medical student',
    location: 'Dakar, Senegal',
    path: 'Hadith & Sunnah · Intermediate',
    seed: 8,
  },
]

export type Stat = {
  value: number
  suffix?: string
  label: string
  detail: string
}

export const stats: Stat[] = [
  { value: 10000, suffix: '+', label: 'Learners', detail: 'Across families and study circles' },
  { value: 100, suffix: '+', label: 'Courses', detail: 'Mapped to eight learning stages' },
  { value: 50, suffix: '+', label: 'Teachers', detail: 'Qualified and traditionally trained' },
  { value: 30, suffix: '+', label: 'Countries', detail: 'One global community of learning' },
]
