import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SILK } from '../../lib/motion'

export type HeroVideoProps = {
  /**
   * Cinematic footage (MP4/WebM). Leave empty to render `fallback` only.
   * Only attached once the slide has been seen, so we never download three
   * heavy files at once.
   */
  src?: string
  /** Poster frame — shown while the video buffers and if it cannot play. */
  poster?: string
  /** Only the visible slide loads and plays. */
  active?: boolean
  /** Accessible description of the visual. */
  label: string
  /**
   * Designed scene mounted permanently behind the video. This is what keeps the
   * frame complete when no footage is supplied yet, or when a file 404s.
   */
  fallback?: ReactNode
  className?: string
}

export function HeroVideo({
  src,
  poster,
  active = true,
  label,
  fallback,
  className = '',
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduced = useReducedMotion()

  const [seen, setSeen] = useState(active)
  const [ready, setReady] = useState(false)
  const [broken, setBroken] = useState(false)

  useEffect(() => {
    if (active) setSeen(true)
  }, [active])

  /* Reset the fade-in whenever the source changes. */
  useEffect(() => {
    setReady(false)
    setBroken(false)
  }, [src])

  /* Play / pause with the slide, respecting reduced motion. */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (active && !reduced) {
      // Autoplay can legitimately reject (data saver, low power). The fallback
      // scene is already visible underneath, so a rejection is never visible.
      const attempt = video.play()
      if (attempt && typeof attempt.catch === 'function') attempt.catch(() => {})
    } else {
      video.pause()
    }
  }, [active, reduced, seen, src])

  const mountVideo = Boolean(src) && seen && !broken

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-forest-deep ${className}`}
      role="img"
      aria-label={label}
    >
      {/* ---- permanent fallback layer: designed scene + poster ------------ */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        animate={reduced ? { scale: 1 } : { scale: active ? [1.04, 1.1] : 1.04 }}
        transition={
          reduced
            ? { duration: 0.001 }
            : { duration: 22, ease: 'linear', repeat: Infinity, repeatType: 'mirror' }
        }
      >
        {fallback}
        {poster ? (
          <img
            src={poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </motion.div>

      {/* ---- real footage, faded in only once it can actually play --------- */}
      {mountVideo ? (
        <motion.video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay={!reduced}
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          preload={active ? 'auto' : 'metadata'}
          tabIndex={-1}
          aria-hidden
          initial={false}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: reduced ? 0.001 : 1.2, ease: SILK }}
          onCanPlay={() => setReady(true)}
          onPlaying={() => setReady(true)}
          onError={() => {
            setBroken(true)
            setReady(false)
          }}
        />
      ) : null}
    </div>
  )
}
