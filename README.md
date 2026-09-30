# Ihsan Global Quran Academy — Online Quran Education (Landing Page)

A premium, editorial landing page for an Islamic education platform. Built as a **frontend-only**
deliverable: no backend, no auth, no database, no dashboard. The structure is ready to grow into a
MERN application later.

## Stack

| Concern     | Choice                                              |
| ----------- | --------------------------------------------------- |
| Framework   | React 19 + TypeScript                               |
| Build       | Vite 7                                              |
| Styling     | Tailwind CSS v4 (`@theme` design tokens) + local CSS |
| Motion      | Framer Motion 12                                    |
| Icons       | Lucide React                                        |
| Typography  | Playfair Display (display) · Inter (UI) · Amiri (Arabic) |

## Scripts

```bash
npm install
npm run dev        # dev server on http://localhost:5173
npm run build      # typecheck + production build
npm run typecheck  # tsc only
npm run preview    # serve the production build
```

## Design system

Tokens live in `src/index.css` under `@theme`, so they are available as Tailwind utilities
(`bg-forest`, `text-gold`, `border-sage`, …).

```
forest #063F32   forest-soft #0B5A46   sage #DDE9DE   cream #F8F4EA   beige #EDE5D5
gold   #C9A45C   gold-light  #E5C985   ivory #F7F8F3  ink   #10221D   muted #53645E
```

Reusable, hand-authored pieces: `.shell`, `.section-y`, `.display-1/2/3`, `.eyebrow`, `.lede`,
`.glass`, `.surface`, `.arch-top`, plus the Islamic geometry patterns `.pattern-grid`,
`.pattern-stars`, `.pattern-arabesque` and the ornament components in `src/components/ui/Ornaments.tsx`.

## Structure

```
src/
  components/
    layout/   Navbar, Footer, Logo
    home/     HeroCarousel, HeroSlide, HeroVisuals, LearningJourney, WhyChooseUs,
              ProgramsSection, ImmersiveFeature, ScholarsSection, KnowledgeLibrary,
              CommunitySection, Testimonials, StatsSection, FinalCTA
    ui/       Button, Badge, SectionHeading, Reveal, Counter, VideoCard,
              ProgramCard, ScholarCard, TestimonialCard, Ornaments
  data/       heroSlides, journey, programs, navigation   (all content arrays)
  lib/        motion.ts (shared variants + silk easing)
```

All copy lives in `src/data/*` — components render from arrays, so text changes never require
touching markup.

## Replacing the hero visuals with real video

The hero visuals are deliberately asset-free right now (pure CSS/SVG compositions), so nothing can
render a broken `<video>`. To use real footage, fill the `video` field of any slide in
`src/data/heroSlides.ts`:

```ts
video: {
  src: '/media/slide-1.mp4',      // served from public/
  poster: '/media/slide-1.jpg',   // shown before/while loading
}
```

`VideoCard` then renders a real `<video>` (autoplay, muted, loop, playsInline, poster, lazy
`preload="none"`), pauses every non-active slide, and skips autoplay entirely when the visitor has
`prefers-reduced-motion: reduce` set.

## Implemented behaviours

- **Hero carousel** — 3 slides, 6.5s autoplay, pause on hover/focus/hidden tab, prev/next, dot
  indicators with a progress fill, keyboard arrows, touch swipe, `aria-live` announcements, and
  inactive slides removed from the tab order.
- **Learning journey** — horizontal snap rail whose gold path draws in step with scroll; nodes
  light up as the line reaches them.
- **Motion** — scroll reveals, staggered cards, blur-to-sharp hero type, pointer-driven 3D tilt on
  the hero visual, floating ornaments, animated counters, and a scroll progress bar in the navbar.
- **Accessibility** — semantic sections, one landmark `main`, skip link, visible focus rings,
  labelled controls, alt/`role="img"` descriptions for generated art, reduced-motion support.
- **Responsive** — verified with no horizontal page overflow at 320 / 390 / 768 / 1024 / 1280 / 1440.
  Mobile stacks hero text above the visual and moves navigation into a slide-in drawer.

## Notes for the MERN phase

`src/data/*` is the seam for API calls: swap each array for a fetch/React Query hook and the
components keep working. There is no routing yet — when pages are added, `Navbar`, `Footer` and the
CTA links (`#anchor` hrefs) are the only places that need to become real routes.
