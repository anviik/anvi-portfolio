import { useRef } from 'react'
import { useScrollFrame } from '../lib/motion'

/** Thin page-progress bar along the top edge, tinted by the section in view. */
export default function ScrollProgress({ tone }) {
  const barRef = useRef(null)

  useScrollFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
    if (barRef.current) barRef.current.style.transform = `scaleX(${p})`
  })

  return <div ref={barRef} className={`scroll-progress tone-${tone}`} aria-hidden="true" />
}
