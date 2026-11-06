import { useRef } from 'react'
import { prefersReducedMotion, Reveal, SplitText, useScrollFrame } from '../lib/motion'

function NameLine({ text, delay, className }) {
  return (
    <span className={className} aria-hidden="true">
      {text.split('').map((ch, i) => (
        <span key={i} className="split-w hero-ch">
          <span style={{ transitionDelay: `${delay + i * 0.045}s` }}>{ch}</span>
        </span>
      ))}
    </span>
  )
}

export default function Hero({ data, onNavigate }) {
  const heroRef = useRef(null)
  const [first, last] = data.name.split(' ')

  // Slides the two name lines apart as the hero scrolls away.
  useScrollFrame(() => {
    const el = heroRef.current
    if (!el || prefersReducedMotion()) return
    el.style.setProperty('--p', Math.min(1, window.scrollY / el.offsetHeight).toFixed(3))
  })

  return (
    <section className="hero container" ref={heroRef}>
      <div className="hero-stage">
        <h1 className="hero-title split in" aria-label={data.name}>
          <NameLine text={first} delay={0.15} className="hero-first" />
          <NameLine text={last} delay={0.35} className="hero-last" />
        </h1>
        <SplitText as="p" text={data.subtitle} className="hero-statement" delay={0.7} stagger={0.04} />
      </div>

      <Reveal className="hero-foot" delay={1} bottomMargin="0%">
        {data.heroMeta.map((m) => (
          <span key={m} className="eyebrow tone-muted">{m}</span>
        ))}
        <button className="hero-cue eyebrow tone-muted" onClick={() => onNavigate('projects')}>
          Selected work <span className="hero-cue-arrow" aria-hidden="true">↓</span>
        </button>
      </Reveal>
    </section>
  )
}
