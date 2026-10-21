import type { Program } from '../types/program'

/**
 * Qur'an Online Academy — the first implementation of the Ehsaan Global
 * educational vision. Content follows the Universal Program Template
 * (web-structure doc, sections 05 & 07-A).
 */
export const quranOnlineAcademy: Program = {
  slug: 'quran-online-academy',
  name: "Qur'an Online Academy",
  shortIdentity: "Qur'an-Centred Foundational Learning",
  category: 'individual',
  categoryLabel: 'Individual Development',
  heroTagline: "Learn the Qur'an. Understand its Message. Live Its Guidance.",
  heroDescription:
    "Qur'an, Arabic, Sunnah, understanding, reflection, and Tarbiyah designed to establish a strong foundation for lifelong learning — serving as the first implementation of the Ehsaan Global educational vision.",
  primaryCta: { label: 'Join / Register', href: '/register' },
  secondaryCta: { label: 'Explore the Program', href: '#introduction' },

  introduction: {
    title: 'What Is This Program?',
    content: [
      "The Qur'an Online Academy is a Qur'an-centred foundational learning pathway designed for learners of every stage — from reading their first letters to engaging with tafseer and Islamic sciences.",
      'It was created to give individuals a strong, lifelong foundation in the Qur’an and Sunnah: correct recitation, real understanding, reflection, and the Tarbiyah that turns knowledge into character.',
      'As the first expression of the Ehsaan Global vision, the Academy connects its learners to a wider journey — individual development that strengthens families and serves society responsibly.',
    ],
  },

  why: {
    title: 'Why Does It Matter?',
    challengeTitle: 'The Challenge',
    challenge:
      'Many learners read or memorise the Qur’an without connecting it to understanding, character, and daily life — leaving knowledge disconnected from purpose and practice.',
    responseTitle: 'Our Response',
    response:
      'The Academy offers an integrated pathway that joins recitation with meaning, reflection, and Tarbiyah, so study of the Qur’an becomes a transformative journey rather than an isolated activity.',
    purposeTitle: 'The Purpose',
    purpose:
      'To help each learner build knowledge that transforms the individual — strengthening family life and contributing to a responsible, morally grounded society.',
  },

  approach: {
    title: 'How Do We Approach Learning?',
    description:
      'Our educational pathway begins with the Qur’an itself and moves from sound to understanding to lived practice.',
    pillars: ["Qur'an", 'Understanding', 'Reflection', 'Application', 'Character'],
  },

  offer: {
    title: 'Program Components',
    components: [
      {
        title: "Qur'an Reading",
        description: 'Confident, correct reading from the mushaf for all ages and starting points.',
      },
      {
        title: "Qur'an Recitation",
        description: 'Fluent recitation with precision and presence, building a lifelong connection.',
      },
      {
        title: 'Tajweed',
        description: 'Makharij and rules of articulation, refined through listening and correction.',
      },
      {
        title: 'Hifz',
        description: 'Structured memorisation plans with steady review and support.',
      },
      {
        title: 'Hifz Revision',
        description: 'Consolidating memorisation through systematic revision cycles.',
      },
      {
        title: "Lisan-ul-Qur'an",
        description: 'The language of revelation — vocabulary, grammar and comprehension.',
      },
      {
        title: "Qur'anic Sciences",
        description: 'The prerequisites of understanding revelation: context, coherence and themes.',
      },
      {
        title: 'Tafseer',
        description: 'Verse-to-message study that moves from text to lived guidance.',
      },
      {
        title: 'Seerah',
        description: 'The life of the Prophet ﷺ as the living commentary on the Qur’an.',
      },
      {
        title: 'Fiqh',
        description: 'Practical rulings of worship and daily life, grounded in authentic sources.',
      },
      {
        title: 'Character Development',
        description: 'Tarbiyah that carries learning into akhlaq, relationships and responsibility.',
      },
    ],
  },

  audience: {
    title: 'Who Is It For?',
    groups: ['Children', 'Teens', 'Adults', 'Beginners → Advanced'],
    notes:
      'Open to learners at any stage — age-appropriate streams, beginner through advanced levels, for individuals and families alike.',
  },

  learningJourney: {
    title: 'Your Pathway',
    stages: [
      {
        number: '01',
        title: "Qur'an Reading",
        description: 'Beginning with the letters and words of the Qur’an — accurate, confident reading.',
        focusAreas: ['Letters & phonetics', 'Fluency', 'Foundations'],
      },
      {
        number: '02',
        title: 'Correct Recitation',
        description: 'Recitation disciplined by Tajweed, with voice, rules and rhythm corrected through practice.',
        focusAreas: ['Tajweed', 'Makharij', 'Practice'],
      },
      {
        number: '03',
        title: 'Understanding',
        description: "Moving into meaning through vocabulary, Qur'anic sciences and tafseer.",
        focusAreas: ['Lisan-ul-Qur’an', 'Themes', 'Tafseer'],
      },
      {
        number: '04',
        title: 'Reflection',
        description: 'Meditating on the message — connecting the Book to one’s own times, questions and choices.',
        focusAreas: ['Tadabbur', 'Journaling', 'Discussion'],
      },
      {
        number: '05',
        title: 'Application',
        description: 'Living the guidance in worship, conduct, study and professional life.',
        focusAreas: ['Fiqh', 'Sunnah', 'Daily practice'],
      },
      {
        number: '06',
        title: 'Character & Tarbiyah',
        description: 'Knowledge shaping the person: akhlaq, humility, discipline and responsibility.',
        focusAreas: ['Akhlaq', 'Tazkiyah', 'Service'],
      },
    ],
  },

  outcomes: {
    title: 'What Will Learners Develop?',
    outcomes: [
      {
        category: 'Knowledge & Understanding',
        items: ['Accurate recitation and Tajweed', 'Meaning of the Qur’an and its themes', 'Core Islamic sciences'],
      },
      {
        category: 'Character & Tarbiyah',
        items: ['Purpose, identity and values', 'Emotional maturity and humility', 'Consistent spiritual practice'],
      },
      {
        category: 'Practical Ability',
        items: ['Independent study skills', 'Communication and expression', 'Memorisation discipline'],
      },
      {
        category: 'Responsibility & Service',
        items: ['Strengthened family life', 'Community participation', 'Social responsibility'],
      },
    ],
  },

  methodology: {
    title: 'How Will Learning Take Place?',
    methods: [
      { title: 'Online Classes', description: 'Live, scheduled sessions with structured curricula.' },
      { title: 'Interactive Sessions', description: 'Recitation circles, Q&A and guided practice.' },
      { title: 'Discussions', description: 'Group conversation that builds comprehension and confidence.' },
      { title: 'Activities & Projects', description: 'Applied learning that connects text to life.' },
      { title: 'Assessments', description: 'Regular, gentle checkpoints for progress.' },
      { title: 'Mentoring', description: 'Personal guidance for each learner’s journey.' },
    ],
  },

  structure: {
    title: 'Program Information',
    items: [
      { label: 'Duration', value: 'Ongoing — term based' },
      { label: 'Levels', value: 'Beginner → Intermediate → Advanced' },
      { label: 'Sessions', value: 'Multiple sessions per week' },
      { label: 'Schedule', value: 'Flexible — mornings & evenings' },
      { label: 'Mode', value: 'Online' },
      { label: 'Language', value: 'Arabic · English · Urdu' },
      { label: 'Fee', value: 'Contact us for details' },
    ],
  },

  eligibility: {
    title: 'Who Can Join?',
    requirements: [
      'Open to children, teens and adults of all backgrounds.',
      'No previous knowledge of Arabic or the sciences is required.',
      'Registration is simple — choose a stream and book a placement.',
    ],
    note: 'No previous experience is required.',
  },

  faqs: [
    {
      question: 'Who is this program for?',
      answer:
        'Children, teens and adults — with age-appropriate streams for every level, from first reading to advanced study.',
    },
    {
      question: 'How long is the program?',
      answer:
        'The Academy runs on an ongoing, term-based structure; pathways vary by stream and level. Learning continues as long as you wish.',
    },
    {
      question: 'Is the program online or on-site?',
      answer: 'All classes are online, so learners can join from anywhere in the world.',
    },
    {
      question: 'What language is used?',
      answer: 'Instruction is available in Arabic, English and Urdu, depending on the stream.',
    },
    {
      question: 'Do I need previous knowledge?',
      answer: 'No previous experience is required — beginners start with Qur’an Reading and move upward.',
    },
    {
      question: 'How can I register?',
      answer: 'Use the Register button on this page, or reach out through the Contact page and our team will guide you.',
    },
  ],

  cta: {
    title: 'Begin Your Journey',
    primary: { label: 'Register Now', href: '/register' },
    secondary: { label: 'Contact Us', href: '/contact' },
  },
}
