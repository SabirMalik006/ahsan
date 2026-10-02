export type ProgramComponent = {
  title: string
  description: string
}

export type LearningStage = {
  number: string | number
  title: string
  description: string
  focusAreas: string[]
}

export type ProgramOutcome = {
  category: string
  items: string[]
}

export type ProgramMethod = {
  title: string
  description: string
}

export type ProgramStructureItem = {
  label: string
  value: string
}

export type ProgramFAQ = {
  question: string
  answer: string
}

export type ProgramCategory = 'individual' | 'education' | 'family' | 'society'

export interface Program {
  slug: string
  name: string
  shortIdentity: string
  category: ProgramCategory
  categoryLabel: string
  heroTagline?: string
  heroDescription: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  introduction: {
    title: string
    content: string[]
  }
  why: {
    title: string
    challengeTitle: string
    challenge: string
    responseTitle: string
    response: string
    purposeTitle: string
    purpose: string
  }
  approach: {
    title: string
    description: string
    pillars: string[]
  }
  offer: {
    title: string
    components: ProgramComponent[]
  }
  audience: {
    title: string
    groups: string[]
    notes?: string
  }
  learningJourney: {
    title: string
    stages: LearningStage[]
  }
  outcomes: {
    title: string
    outcomes: ProgramOutcome[]
  }
  methodology: {
    title: string
    methods: ProgramMethod[]
  }
  structure: {
    title: string
    items: ProgramStructureItem[]
  }
  eligibility: {
    title: string
    requirements: string[]
    note?: string
  }
  faqs: ProgramFAQ[]
  cta: {
    title: string
    primary: { label: string; href: string }
    secondary: { label: string; href: string }
  }
}
