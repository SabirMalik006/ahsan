import { ArchOutline, Particles, Rosette } from '../ui/Ornaments'

/* ==========================================================================
   Shared atmosphere
   ========================================================================== */
function Watermark() {
  return (
    <>
      <Rosette className="anim-spin absolute -right-24 -top-24 h-[420px] w-[420px] text-gold-light/12" />
      <Rosette className="anim-spin-rev absolute -bottom-32 -left-28 h-[380px] w-[380px] text-cream/[0.07]" />
      <div className="pattern-grid absolute inset-0 opacity-[0.05] mix-blend-overlay" />
    </>
  )
}

function Flare({ className = '' }: { className?: string }) {
  return <div className={`anim-sheen pointer-events-none absolute rounded-full blur-3xl ${className}`} />
}

/* ==========================================================================
   SLIDE 1 — Open Qur'an beneath warm light in an arched courtyard
   ========================================================================== */
export function SceneQuran() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(165deg,#042b22_0%,#063f32_46%,#0b5a46_100%)]">
      {/* light entering from above */}
      <div className="absolute inset-0 bg-[radial-gradient(58%_42%_at_50%_6%,rgba(229,201,133,0.42),transparent_72%)]" />
      <Flare className="left-1/2 top-[-6%] h-[46%] w-[70%] -translate-x-1/2 bg-gold-light/25" />

      {/* architectural arch */}
      <ArchOutline className="absolute inset-x-[6%] top-[8%] h-[86%] text-gold/25" strokeWidth={1.2} />
      <ArchOutline className="absolute inset-x-[13%] top-[14%] h-[80%] text-cream/10" strokeWidth={0.8} />

      <Watermark />

      {/* the open book */}
      <div className="absolute inset-x-[9%] top-[36%] h-[32%] [perspective:1400px]">
        <div className="absolute inset-x-[8%] -bottom-4 h-10 rounded-[50%] bg-forest-deep/70 blur-2xl" />
        <div className="relative flex h-full w-full [transform-style:preserve-3d]">
          {(['left', 'right'] as const).map((side) => (
            <div
              key={side}
              className={`relative h-full w-1/2 overflow-hidden border-gold/35 ${
                side === 'left'
                  ? 'origin-right rounded-l-[8px] border-y border-l [transform:rotateY(19deg)]'
                  : 'origin-left rounded-r-[8px] border-y border-r [transform:rotateY(-19deg)]'
              }`}
              style={{
                backgroundImage:
                  side === 'left'
                    ? 'linear-gradient(100deg,#f2ead9 0%,#f8f4ea 62%,#e6dcc6 100%)'
                    : 'linear-gradient(260deg,#f2ead9 0%,#f8f4ea 62%,#e6dcc6 100%)',
              }}
            >
              {/* manuscript ruling */}
              <div
                className="absolute inset-x-[14%] inset-y-[16%] opacity-[0.5]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(to bottom, rgba(16,34,29,0.14) 0 1px, transparent 1px 10px)',
                  maskImage: 'linear-gradient(to bottom, #000 72%, transparent)',
                }}
              />
              {/* text blocks */}
              <div className="absolute inset-x-[18%] top-[26%] space-y-[7px]">
                <div className="h-[3px] w-[62%] rounded-full bg-forest/28" />
                <div className="h-[3px] w-[78%] rounded-full bg-forest/20" />
                <div className="h-[3px] w-[54%] rounded-full bg-forest/20" />
              </div>
              <div className="absolute inset-x-[18%] bottom-[22%]">
                <div className="h-[2px] w-[40%] rounded-full bg-gold/70" />
              </div>
              {/* page gutter shading */}
              <div
                className={`absolute inset-y-0 w-[26%] ${
                  side === 'left'
                    ? 'right-0 bg-[linear-gradient(270deg,rgba(6,63,50,0.22),transparent)]'
                    : 'left-0 bg-[linear-gradient(90deg,rgba(6,63,50,0.22),transparent)]'
                }`}
              />
            </div>
          ))}
          {/* spine */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-forest-deep/60" />
        </div>
        {/* gold reading ribbon */}
        <div className="absolute -bottom-6 left-[42%] h-16 w-[3px] rotate-[8deg] rounded-full bg-gradient-to-b from-gold-light to-gold/0" />
      </div>

      <Particles count={22} />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-deep/70 to-transparent" />
    </div>
  )
}

/* ==========================================================================
   SLIDE 2 — A study desk: classical manuscripts meeting a modern tablet
   ========================================================================== */
export function SceneLibrary() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(200deg,#f8f4ea_0%,#ede5d5_46%,#dde9de_100%)]">
      {/* window light shaft */}
      <div className="absolute -left-[10%] top-[-30%] h-[150%] w-[52%] rotate-[16deg] bg-[linear-gradient(90deg,rgba(255,255,255,0.85),rgba(229,201,133,0.22),transparent)] blur-[2px]" />

      {/* deep green architectural panel */}
      <div className="absolute right-0 top-0 h-full w-[38%] bg-[linear-gradient(190deg,#063f32,#0b5a46)]">
        <div className="pattern-stars absolute inset-0 opacity-[0.16]" />
        <ArchOutline className="absolute inset-x-[18%] top-[12%] h-[54%] text-gold-light/35" strokeWidth={1} />
        <div className="absolute inset-x-[18%] top-[12%] h-[54%] rounded-arch bg-[radial-gradient(70%_60%_at_50%_30%,rgba(229,201,133,0.35),transparent)]" />
      </div>

      {/* desk surface */}
      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(180deg,#b99b6b_0%,#8f7346_38%,#6d5734_100%)]">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gold-light/50" />
        <div className="anim-shimmer absolute inset-x-0 top-0 h-full bg-[linear-gradient(100deg,transparent_40%,rgba(255,255,255,0.28)_50%,transparent_60%)]" />
      </div>

      {/* stack of classical books */}
      <div className="absolute bottom-[38%] left-[8%] w-[38%] space-y-[3px]">
        {[
          { w: '92%', h: 'h-3.5', c: 'from-[#0b5a46] to-[#063f32]' },
          { w: '84%', h: 'h-3', c: 'from-[#8f7346] to-[#6d5734]' },
          { w: '96%', h: 'h-4', c: 'from-[#f8f4ea] to-[#e6dcc6]' },
          { w: '88%', h: 'h-3', c: 'from-[#137260] to-[#0b5a46]' },
        ].map((b, i) => (
          <div
            key={i}
            className={`${b.h} rounded-[3px] bg-gradient-to-r ${b.c} shadow-[0_8px_18px_-12px_rgba(6,63,50,0.9)]`}
            style={{ width: b.w, marginLeft: i % 2 === 0 ? 0 : '6%' }}
          />
        ))}
        {/* open manuscript on top */}
        <div className="relative mt-1 h-10 w-full rounded-[4px] border border-gold/40 bg-cream">
          <div
            className="absolute inset-2 opacity-60"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, rgba(16,34,29,0.16) 0 1px, transparent 1px 8px)',
            }}
          />
          <div className="absolute left-1/2 top-0 h-full w-px bg-forest/25" />
        </div>
      </div>

      {/* modern tablet */}
      <div className="absolute bottom-[40%] right-[9%] h-[30%] w-[30%] rotate-[-7deg] rounded-[16px] border border-white/25 bg-[linear-gradient(160deg,#0b1f1a,#04211a)] p-1.5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.75)]">
        <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-[linear-gradient(160deg,rgba(11,90,70,0.9),rgba(4,33,26,1))] p-2.5">
          <div className="pattern-grid absolute inset-0 opacity-10" />
          <div className="h-[5px] w-[52%] rounded-full bg-gold-light/85" />
          <div className="mt-2.5 space-y-[5px]">
            <div className="h-[3px] w-[86%] rounded-full bg-cream/35" />
            <div className="h-[3px] w-[70%] rounded-full bg-cream/25" />
            <div className="h-[3px] w-[80%] rounded-full bg-cream/25" />
            <div className="h-[3px] w-[46%] rounded-full bg-cream/20" />
          </div>
          <div className="absolute inset-x-2.5 bottom-2.5 h-6 rounded-md border border-gold/30 bg-cream/[0.06]" />
        </div>
      </div>

      {/* floating manuscript chip */}
      <div className="anim-float absolute left-[52%] top-[16%] w-[30%] rotate-[5deg] rounded-xl border border-white/60 bg-white/85 p-3 shadow-[0_24px_48px_-26px_rgba(6,63,50,0.5)] backdrop-blur-sm">
        <div className="text-[9px] font-medium uppercase tracking-[0.22em] text-gold-deep">Isnād</div>
        <div className="mt-2 space-y-[5px]">
          <div className="h-[3px] w-full rounded-full bg-forest/15" />
          <div className="h-[3px] w-[72%] rounded-full bg-forest/12" />
        </div>
      </div>

      <Particles count={14} tone="gold" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_20%,rgba(255,255,255,0.35),transparent)]" />
    </div>
  )
}

/* ==========================================================================
   SLIDE 3 — Family & community gathered in a courtyard of light
   ========================================================================== */
export function SceneFamily() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(180deg,#04241c_0%,#063f32_55%,#0b5a46_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(52%_46%_at_50%_96%,rgba(229,201,133,0.4),transparent_70%)]" />
      <Flare className="bottom-[6%] left-1/2 h-[44%] w-[76%] -translate-x-1/2 bg-gold-light/22" />

      {/* concentric courtyard arches */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute"
          aria-hidden
          style={{
            inset: `${6 + i * 9}% ${10 + i * 8}% ${4 + i * 7}%`,
            opacity: 0.34 - i * 0.09,
          }}
        >
          <ArchOutline className="h-full w-full text-gold-light" strokeWidth={0.9} />
        </div>
      ))}

      <div className="pattern-stars absolute inset-0 opacity-[0.14]" />
      <Watermark />

      {/* family silhouettes */}
      <div className="absolute bottom-[12%] left-1/2 flex -translate-x-1/2 items-end gap-4">
        {[
          { h: 'h-28', w: 'w-[74px]' },
          { h: 'h-20', w: 'w-[54px]' },
          { h: 'h-32', w: 'w-[82px]' },
        ].map((f, i) => (
          <svg
            key={i}
            viewBox="0 0 100 130"
            aria-hidden
            className={`${f.h} ${f.w} text-cream`}
            style={{ opacity: 0.86 - i * 0.06 }}
          >
            <circle cx="50" cy="26" r="17" fill="currentColor" opacity="0.95" />
            <path
              d="M50 48c19 0 30 12 32 34l2 48H16l2-48c2-22 13-34 32-34z"
              fill="currentColor"
              opacity="0.8"
            />
          </svg>
        ))}
      </div>

      {/* ground reflection */}
      <div className="absolute inset-x-[18%] bottom-[9%] h-8 rounded-[50%] bg-gold-light/25 blur-2xl" />

      {/* floating community notes */}
      <div className="anim-float absolute left-[7%] top-[22%] w-[30%] rounded-xl border border-white/25 bg-white/12 p-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-gold-light/70" />
          <div className="h-[3px] w-16 rounded-full bg-cream/60" />
        </div>
        <div className="mt-2 space-y-[5px]">
          <div className="h-[3px] w-full rounded-full bg-cream/30" />
          <div className="h-[3px] w-[68%] rounded-full bg-cream/25" />
        </div>
      </div>

      <div
        className="anim-float absolute right-[6%] top-[38%] w-[26%] rounded-xl border border-gold/35 bg-forest-deep/70 p-3 backdrop-blur-md"
        style={{ animationDelay: '1.6s' }}
      >
        <div className="text-[9px] font-medium uppercase tracking-[0.22em] text-gold-light/90">
          Mentorship
        </div>
        <div className="mt-2 flex -space-x-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-5 w-5 rounded-full border border-forest-deep bg-cream/80" />
          ))}
        </div>
      </div>

      <Particles count={20} />
    </div>
  )
}
