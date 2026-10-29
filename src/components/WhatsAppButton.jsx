import { useState, useEffect } from 'react'
import './WhatsAppButton.css'

const WhatsAppButton = () => {
  const [visible, setVisible]   = useState(false)
  const [showTip, setShowTip]   = useState(false)

  useEffect(() => {
    // show after 2s
    const t1 = setTimeout(() => setVisible(true), 2000)
    // show tooltip after 4s
    const t2 = setTimeout(() => setShowTip(true), 4000)
    // hide tooltip after 8s
    const t3 = setTimeout(() => setShowTip(false), 8000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <a
      href="https://wa.me/971567505609?text=Hello%2C%20I%20am%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-btn ${visible ? 'wa-btn--visible' : ''}`}
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <div className={`wa-btn__tooltip ${showTip ? 'wa-btn__tooltip--show' : ''}`}>
        <span>Chat with us!</span>
        <svg viewBox="0 0 8 8" width="8" height="8" className="wa-btn__tooltip-arrow">
          <path d="M0 0 L8 4 L0 8 Z" fill="rgba(37,211,102,0.95)"/>
        </svg>
      </div>

      {/* Pulse rings */}
      <span className="wa-btn__ring wa-btn__ring--1" aria-hidden="true" />
      <span className="wa-btn__ring wa-btn__ring--2" aria-hidden="true" />

      {/* WhatsApp SVG icon */}
      <span className="wa-btn__icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
          <circle cx="16" cy="16" r="16" fill="#25D366"/>
          <path
            d="M23.5 8.5A10.47 10.47 0 0 0 16 5.5C10.2 5.5 5.5 10.2 5.5 16c0 1.86.49 3.67 1.41 5.26L5.5 26.5l5.38-1.4A10.47 10.47 0 0 0 16 26.5c5.8 0 10.5-4.7 10.5-10.5 0-2.8-1.09-5.43-3-7.5z"
            fill="white"
          />
          <path
            d="M21.3 18.7c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
            fill="#25D366"
          />
        </svg>
      </span>
    </a>
  )
}

export default WhatsAppButton
