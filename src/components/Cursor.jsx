import { useEffect, useRef, useState } from 'react'

// Dot + trailing ring. The ring grows over links, and elements with a
// `data-cursor` attribute show that word inside it. Off for touch and coarse pointers.
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [label, setLabel] = useState('')

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
    document.body.classList.add('custom-cursor')

    let raf
    let seen = false
    const ring = { x: 0, y: 0 }
    const mouse = { x: 0, y: 0 }

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (!seen) {
        // Start the ring on the pointer so it doesn't fly in from the corner.
        seen = true
        ring.x = mouse.x
        ring.y = mouse.y
        dotRef.current?.classList.add('visible')
        ringRef.current?.classList.add('visible')
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`
      }
    }

    const onOver = (e) => {
      const tagged = e.target.closest('[data-cursor]')
      const interactive = tagged || e.target.closest('a, button, [role="button"]')
      ringRef.current?.classList.toggle('active', !!interactive)
      ringRef.current?.classList.toggle('labelled', !!tagged)
      dotRef.current?.classList.toggle('hidden', !!tagged)
      setLabel(tagged ? tagged.dataset.cursor : '')
    }

    const loop = () => {
      ring.x += (mouse.x - ring.x) * 0.16
      ring.y += (mouse.y - ring.y) * 0.16
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
      document.body.classList.remove('custom-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span className="cursor-inner"><span className="cursor-label">{label}</span></span>
      </div>
    </>
  )
}
