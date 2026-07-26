import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Events', to: '/events' },
  { label: 'RSVP', to: '/rsvp' },
  { label: 'Travel', to: '/travel' },
  { label: 'Explore Hawaii', to: '/hawaii' },
  // { label: 'Registry', to: '/registry' },
  { label: 'FAQ', to: '/faq' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)' }}>

      {/* Title row */}
      <div style={{ borderBottom: '1px solid #e7e5e4', padding: '20px 0', textAlign: 'center' }}>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', letterSpacing: '0.2em', color: '#2C2C2C', textTransform: 'uppercase', margin: 0, fontWeight: 500 }}>
          Wilson Wedding
        </h1>
      </div>

      {/* Desktop tabs */}
      <div className="hidden md:flex" style={{ borderBottom: '1px solid #e7e5e4', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
        {NAV_ITEMS.map((item) => {
          const isActive = item.to === '/' ? location.pathname === '/' : location.pathname === item.to
          return (
            <Link
              key={item.label}
              to={item.to}
              style={{
                padding: '12px 16px',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: isActive ? '#2C2C2C' : '#78716c',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                borderBottom: isActive ? '2px solid #D4AF37' : '2px solid transparent',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#2C2C2C'; (e.currentTarget as HTMLElement).style.borderBottomColor = '#D4AF37' }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = isActive ? '#2C2C2C' : '#78716c'
                ;(e.currentTarget as HTMLElement).style.borderBottomColor = isActive ? '#D4AF37' : 'transparent'
              }}
            >
              {item.label}
            </Link>
          )
        })}
      </div>

      {/* Mobile row */}
      <div className="flex md:hidden" style={{ borderBottom: '1px solid #e7e5e4', padding: '12px 24px', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#78716c' }}>Menu</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#78716c' }}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#fff', borderBottom: '1px solid #e7e5e4' }}>
          {NAV_ITEMS.map((item) => {
            const isActive = item.to === '/' ? location.pathname === '/' : location.pathname === item.to
            return (
              <Link
                key={item.label}
                to={item.to}
                style={{
                  display: 'block',
                  padding: '12px 24px',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: isActive ? '#2C2C2C' : '#78716c',
                  textDecoration: 'none',
                  borderBottom: '1px solid #f5f5f4',
                  borderLeft: isActive ? '2px solid #D4AF37' : '2px solid transparent',
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      )}

    </nav>
  )
}
