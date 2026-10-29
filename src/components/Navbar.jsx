import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Home',         href: '#home',         icon: '🏠' },
  { label: 'Services',     href: '#services',     icon: '⚙️' },
  { label: 'Destinations', href: '#destinations', icon: '✈️' },
  { label: 'About Us',     href: '#about',        icon: '👥' },
  { label: 'Contact',      href: '#contact',      icon: '📞' },
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
            <img
              src="/logo.svg"
              alt="Hikayat Al Sahra Tourism"
              className="navbar__logo-img"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'flex'
              }}
            />
            {/* SVG fallback */}
            <div className="navbar__logo-fallback">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" fill="#0a1628" stroke="#C9A84C" strokeWidth="2"/>
                <circle cx="24" cy="24" r="18" fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="1"/>
                {/* Palm tree */}
                <line x1="24" y1="36" x2="24" y2="20" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24 22 Q18 16 14 18 Q18 22 24 22Z" fill="#C9A84C" opacity="0.9"/>
                <path d="M24 22 Q30 15 34 17 Q30 22 24 22Z" fill="#C9A84C" opacity="0.9"/>
                <path d="M24 25 Q20 20 16 21 Q20 26 24 25Z" fill="#C9A84C" opacity="0.7"/>
                {/* Plane */}
                <path d="M28 16 L36 12 L34 16 L36 20 Z" fill="#e0bf6a"/>
                <path d="M30 15 L28 20 L32 19 Z" fill="#e0bf6a" opacity="0.7"/>
                {/* Sun */}
                <circle cx="34" cy="16" r="3" fill="#e0bf6a" opacity="0.6"/>
                {/* Ground / sand */}
                <ellipse cx="24" cy="36" rx="8" ry="2" fill="#C9A84C" opacity="0.3"/>
                {/* Company initial */}
                <text x="24" y="44" textAnchor="middle" fontSize="5" fontWeight="bold"
                  fill="#C9A84C" fontFamily="serif" letterSpacing="0.5">LLC</text>
              </svg>
            </div>
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
                  <span className="navbar__link-icon">{link.icon}</span>
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
