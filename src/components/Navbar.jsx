import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Home',         href: '#home'         },
  { label: 'Services',     href: '#services'     },
  { label: 'Destinations', href: '#destinations' },
  { label: 'About Us',     href: '#about'        },
  { label: 'Contact',      href: '#contact'      },
]

const Navbar = () => {
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [scrolled,    setScrolled]    = useState(false)
  const [activeLink,  setActiveLink]  = useState('#home')
  const [visible,     setVisible]     = useState(true)   // hide on scroll down, show on scroll up / top
  const lastScrollY = useRef(0)

  /* ── scroll handler: hide on scroll-down, show on scroll-up or at top ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      if (y < 60) {
        setVisible(true)        // always show at top
      } else if (y > lastScrollY.current + 8) {
        setVisible(false)       // scrolling DOWN → hide
      } else if (y < lastScrollY.current - 8) {
        setVisible(true)        // scrolling UP  → show
      }
      lastScrollY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── active link by IntersectionObserver ── */
  useEffect(() => {
    const ids = ['home', 'services', 'destinations', 'about', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveLink(`#${e.target.id}`) })
      },
      { threshold: 0.35 }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={[
      'navbar',
      scrolled  ? 'navbar--scrolled' : 'navbar--top',
      !visible  ? 'navbar--hidden'   : '',
    ].join(' ')}>

      <div className="navbar__container">

        {/* ── Logo ── */}
        <a href="#home" className="navbar__logo" aria-label="Hikayat Al Sahra – Home">
          <div className="navbar__logo-img-wrap">
            {/* Hikayat Al Sahra Tourism Logo — inline SVG, no file needed */}
            <svg viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" className="navbar__logo-svg">
              <defs>
                <radialGradient id="nSky" cx="55%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#29b6f6"/>
                  <stop offset="60%" stopColor="#0288d1"/>
                  <stop offset="100%" stopColor="#01579b"/>
                </radialGradient>
                <radialGradient id="nSun" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fff176"/>
                  <stop offset="50%" stopColor="#ffca28"/>
                  <stop offset="100%" stopColor="#ff8f00"/>
                </radialGradient>
                <linearGradient id="nWater" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0288d1"/>
                  <stop offset="100%" stopColor="#01579b"/>
                </linearGradient>
                <clipPath id="nClip">
                  <circle cx="100" cy="88" r="78"/>
                </clipPath>
              </defs>
              {/* White border ring */}
              <circle cx="100" cy="88" r="82" fill="white"/>
              {/* Sky background */}
              <circle cx="100" cy="88" r="78" fill="url(#nSky)"/>
              {/* Clipped content */}
              <g clipPath="url(#nClip)">
                {/* Water */}
                <ellipse cx="100" cy="148" rx="82" ry="24" fill="url(#nWater)" opacity="0.85"/>
                {/* Sun */}
                <circle cx="148" cy="42" r="26" fill="url(#nSun)"/>
                <g stroke="#ffca28" strokeWidth="2.5" strokeLinecap="round" opacity="0.7">
                  <line x1="148" y1="10" x2="148" y2="4"/>
                  <line x1="168" y1="20" x2="173" y2="15"/>
                  <line x1="178" y1="40" x2="184" y2="38"/>
                  <line x1="128" y1="20" x2="123" y2="15"/>
                  <line x1="118" y1="40" x2="112" y2="38"/>
                </g>
                {/* Orbital swoosh */}
                <ellipse cx="100" cy="88" rx="74" ry="25" fill="none" stroke="white" strokeWidth="3.5" transform="rotate(-22 100 88)" opacity="0.95"/>
                {/* Palm trunk */}
                <path d="M92 148 Q94 128 97 108 Q98 95 100 80" stroke="#5d4037" strokeWidth="6" strokeLinecap="round" fill="none"/>
                {/* Palm fronds */}
                <path d="M100 80 Q85 62 68 66" stroke="#388e3c" strokeWidth="5" strokeLinecap="round" fill="none"/>
                <path d="M100 80 Q92 57 95 44" stroke="#43a047" strokeWidth="5" strokeLinecap="round" fill="none"/>
                <path d="M100 80 Q114 58 126 62" stroke="#388e3c" strokeWidth="5" strokeLinecap="round" fill="none"/>
                <path d="M100 80 Q116 71 128 77" stroke="#2e7d32" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
                <path d="M100 80 Q82 74 72 82" stroke="#43a047" strokeWidth="4" strokeLinecap="round" fill="none"/>
                {/* Coconuts */}
                <circle cx="94" cy="84" r="4.5" fill="#795548"/>
                <circle cx="101" cy="81" r="4" fill="#6d4c41"/>
                {/* Airplane */}
                <g transform="translate(44,46) rotate(-30)">
                  <ellipse cx="0" cy="0" rx="18" ry="5" fill="white"/>
                  <path d="M-3 0 L7-13 L13-8 L3 0Z" fill="white"/>
                  <path d="M-3 0 L7 13 L13 8 L3 0Z" fill="#e0e0e0"/>
                  <path d="M-13 0 L-18-7 L-14 0Z" fill="white"/>
                </g>
              </g>
              {/* Border */}
              <circle cx="100" cy="88" r="82" fill="none" stroke="white" strokeWidth="4"/>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">Hikayat Al Sahra</span>
            <span className="navbar__logo-sub">Tourism LLC</span>
          </div>
        </a>

        {/* ── Desktop Links ── */}
        <ul className="navbar__links">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                >
                  <span className="navbar__link-label">{link.label}</span>
                  <span className="navbar__link-bar" />
                  {isActive && <span className="navbar__link-dot" />}
                </a>
              </li>
            )
          })}
        </ul>

        {/* ── CTA ── */}
        <a href="#contact" className="navbar__cta">
          <span>Get in Touch</span>
          <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* ── Hamburger ── */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
           role="navigation" aria-label="Mobile navigation">
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className={`navbar__mobile-link ${activeLink === link.href ? 'navbar__mobile-link--active' : ''}`}
            style={{ animationDelay: `${i * 0.05}s` }}
            onClick={() => setMenuOpen(false)}
          >
            <span className="navbar__mobile-icon">{link.icon}</span>
            <span>{link.label}</span>
            {activeLink === link.href && <span className="navbar__mobile-active-dot">●</span>}
          </a>
        ))}
        <a href="#contact" className="navbar__cta navbar__cta--mobile"
           onClick={() => setMenuOpen(false)}>
          Get in Touch
        </a>
      </div>
    </nav>
  )
}

export default Navbar
