/* ==========================================================================
   HERO SLIDES — exactly three
   --------------------------------------------------------------------------
   VIDEO ASSETS — real footage is wired up and live.

   | slide | file                    | master it was cut from              |
   |-------|-------------------------|-------------------------------------|
   | 01    | hero-quran.mp4  (2.9MB)  | 12465545_1080_1920_30fps.mp4        |
   | 02    | hero-library.mp4 (2.6MB) | 13643568-uhd_3840_2160_24fps.mp4    |
   | 03    | hero-family.mp4  (1.5MB) | 14869652_3840_2160_60fps.mp4        |

   The untouched masters are kept in `videos-originals/` at the project root so
   they are never shipped. Web versions: H.264 MP4, no audio, faststart,
   30 fps, 1600px (1080px for the portrait cut), ~1.1–1.5 Mbps.

   To swap footage, drop a new MP4 into `public/videos/` and change `src` +
   `poster` below — nothing else needs to change. While `src` is empty the
   designed scene for that slide stays on screen as a live fallback, so the
   hero is never an empty black rectangle.
   ========================================================================== */

export type HeroScene = 'quran' | 'library' | 'family'

export type HeroSlide = {
  id: string
  eyebrow: string
  /** Rendered line by line so the reveal can stagger elegantly. */
  titleLines: string[]
  /** Italic serif emphasis applied to the final line. */
  emphasisLastLine?: boolean
  description: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  meta: string
  scene: HeroScene
  /** Small floating badge that overlaps the video frame. */
  badge: string
  /** Tiny technical label inside the frame, paired with the carousel counter. */
  videoLabel: string
  /** Cinematic footage. Empty object → designed scene fallback is used. */
  video: { src?: string; poster?: string }
  /** Accessible description of the visual. */
  caption: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'quran-sunnah',
    eyebrow: "Qur'an • Sunnah • Knowledge",
    titleLines: ['Learn the Qur’an.', 'Live With Purpose.'],
    emphasisLastLine: true,
    description:
      'Explore authentic Islamic learning that connects timeless guidance with the realities of everyday life.',
    primaryCta: { label: 'Start Learning', href: '#final-cta' },
    secondaryCta: { label: 'Explore Programs', href: '#programs' },
    meta: 'Structured learning • Scholar-led • Learn at your own pace',
    scene: 'quran',
    badge: 'Authentic Islamic Learning',
    videoLabel: "Qur'an & Sunnah",
    video: { src: '/videos/hero-quran.mp4', poster: '/videos/hero-quran.jpg' },
    caption: 'Cinematic Islamic footage for the Qur’an & Sunnah slide',
  },
  {
    id: 'structured-study',
    eyebrow: 'Learn • Grow • Understand',
    titleLines: ['Build a Stronger', 'Foundation in Faith.'],
    emphasisLastLine: true,
    description:
      'Follow a clear learning path across Qur’an, Sunnah, Arabic and the essential Islamic sciences.',
    primaryCta: { label: 'Explore Programs', href: '#programs' },
    secondaryCta: { label: 'How It Works', href: '#journey' },
    meta: 'Beginner to advanced • Flexible learning • Guided study',
    scene: 'library',
    badge: 'Scholar-Led Curriculum',
    videoLabel: 'Structured Learning',
    video: { src: '/videos/hero-library.mp4', poster: '/videos/hero-library.jpg' },
    caption: 'Cinematic Islamic footage for the structured learning slide',
  },
  {
    id: 'family-community',
    eyebrow: 'Faith • Family • Community',
    titleLines: ['Let Knowledge', 'Shape Your Life.'],
    emphasisLastLine: true,
    description:
      'Bring meaningful Islamic learning into your daily life, your family and your community.',
    primaryCta: { label: 'Begin Your Journey', href: '#final-cta' },
    secondaryCta: { label: 'Meet Our Community', href: '#community' },
    meta: 'Practical guidance • Family learning • Lifelong growth',
    scene: 'family',
    badge: 'Faith in Everyday Life',
    videoLabel: 'Way of Life',
    video: { src: '/videos/hero-family.mp4', poster: '/videos/hero-family.jpg' },
    caption: 'Cinematic Islamic footage for the family & community slide',
  },
]
