import { SiExcalidraw, SiGoogle } from 'react-icons/si'

const ICONS = {
  excalidraw: [SiExcalidraw, '#6965DB'],
  google: [SiGoogle, '#4285F4'],
}

/**
 * Square logo tile for an organization. Set one of these on an experience entry:
 *   logo: '/logos/file.svg'   an image in /public
 *     logoBg: '#00243e'       optional: fill the tile with the logo's own background colour
 *     logoFill: true          optional: the image is already a full square, so run it edge to edge
 *   logoIcon: 'google'        a brand icon from ICONS above
 *   mono: 'BNY'               typeset letters, used until a real logo file is added
 */
export default function OrgLogo({ org, size = 44 }) {
  const brand = ICONS[org.logoIcon]
  let content

  if (org.logo) {
    content = <img src={org.logo} alt="" loading="lazy" />
  } else if (brand) {
    const [Icon, color] = brand
    content = <Icon size={size * 0.56} style={{ color }} aria-hidden="true" />
  } else {
    content = <span className="org-mono">{org.mono}</span>
  }

  return (
    <span
      className={`org-logo${org.logoBg || org.logoFill ? ' filled' : ''}`}
      style={{ '--size': `${size}px`, ...(org.logoBg && { background: org.logoBg, borderColor: org.logoBg }) }}
    >
      {content}
    </span>
  )
}
