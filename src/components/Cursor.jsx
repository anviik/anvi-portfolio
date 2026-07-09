import { useEffect, useRef, useState } from 'react'

// Custom glowing dot + ring cursor. Disabled on touch / coarse pointers.
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    setEnabled(true)
    document.body.classList.add('custom-cursor')

    let raf
    const ring = { x: 0, y: 0 }
    const mouse = { x: 0, y: 0 }

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`
      }
    }

    const onOver = (e) => {
      const interactive = e.target.closest('a, button, .star, [role="button"]')
      ringRef.current?.classList.toggle('cursor-ring--active', !!interactive)
    }

    const loop = () => {
      ring.x += (mouse.x - ring.x) * 0.18
      ring.y += (mouse.y - ring.y) * 0.18
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
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
