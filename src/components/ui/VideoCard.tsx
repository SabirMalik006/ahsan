import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'

type VideoSource = {
  /** Drop a real MP4/WebM URL here later — nothing else needs to change. */
  src?: string
  /** Poster frame shown before/while the video loads. */
  poster?: string
}

export type VideoCardProps = VideoSource & {
  /** Only the visible slide should play. */
  active?: boolean
  /** Rendered above the video: scrims, captions, play affordances. */
  overlay?: ReactNode
  /** Rendered when no `src` is supplied — the designed placeholder scene. */
  children?: ReactNode
  className?: string
  videoClassName?: string
  /** Accessible description of the scene. */
  label?: string
}

export function VideoCard({
  src,
  poster,
  active = true,
  overlay,
  children,
  className = '',
  videoClassName = '',
  label,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (active && !reduced) {
      // Autoplay can legitimately reject; a poster is always in place so the
      // composition never breaks.
      const play = video.play()
      if (play && typeof play.catch === 'function') play.catch(() => {})
    } else {
      video.pause()
    }
  }, [active, reduced, src])

  return (
    <div className={`relative isolate overflow-hidden ${className}`}>
      {src ? (
        <video
          ref={videoRef}
          className={`h-full w-full object-cover ${videoClassName}`}
          src={src}
          poster={poster}
          autoPlay={!reduced}
          muted
          loop
          playsInline
          preload="none"
          aria-label={label}
        />
      ) : (
        <div className={`h-full w-full ${videoClassName}`} role="img" aria-label={label}>
          {children}
        </div>
      )}
      {overlay}
    </div>
  )
}
