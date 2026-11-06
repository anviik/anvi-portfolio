import { Fragment, useEffect, useRef, useState } from 'react'

export const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

/** Flips to true the first time the element scrolls into view, then stops watching. */
export function useInView(bottomMargin = '-8%') {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.01, rootMargin: `0px 0px ${bottomMargin} 0px` }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [bottomMargin])

  return [ref, inView]
}

/** Runs `onFrame` at most once per animation frame while scrolling or resizing. */
export function useScrollFrame(onFrame) {
  const latest = useRef(onFrame)
  latest.current = onFrame

  useEffect(() => {
    let raf = 0
    const schedule = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        latest.current()
      })
    }
    latest.current()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])
}

/** Animates children in on scroll. `variant` picks the effect: rise, wipe, or line. */
export function Reveal({ as: Tag = 'div', variant = 'rise', delay = 0, bottomMargin, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView(bottomMargin)
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant}${inView ? ' in' : ''} ${className}`.trim()}
      style={delay ? { ...style, transitionDelay: `${delay}s` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Headline whose words rise out of a mask one after another. */
export function SplitText({ as: Tag = 'h2', text, className = '', delay = 0, stagger = 0.07 }) {
  const [ref, inView] = useInView()
  const words = text.split(' ')
  return (
    <Tag ref={ref} className={`split${inView ? ' in' : ''} ${className}`.trim()} aria-label={text}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="split-w" aria-hidden="true">
            <span style={{ transitionDelay: `${delay + i * stagger}s` }}>{word}</span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </Tag>
  )
}
