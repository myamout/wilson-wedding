import { useState, useEffect } from 'react'

// Navbar is two rows: ~64px title + ~40px tabs = ~104px total
const NAVBAR_HEIGHT = 104

const WEDDING_DATE = new Date('2027-06-25T16:30:00-10:00')

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
  }
}

const IMAGES = [
  '/images/slideshow/IMG_2993.JPG',
  '/images/slideshow/IMG_2991.JPG',
  '/images/slideshow/IMG_2985.JPG',
  '/images/slideshow/IMG_2952.JPG',
  '/images/slideshow/IMG_2995.JPG',
  '/images/slideshow/IMG_2980.JPG',
  '/images/slideshow/IMG_2982.JPG',
  '/images/slideshow/DSCF3981.JPG',
  '/images/slideshow/DSCF4585.JPG',
  '/images/slideshow/DSCF4546.jpeg',
  '/images/slideshow/IMG_2963.JPG',
  '/images/slideshow/IMG_2988.JPG',
  '/images/slideshow/IMG_2989.JPG',
  '/images/slideshow/IMG_2974.JPG',
  '/images/slideshow/IMG_2949.JPG',
  '/images/slideshow/IMG_2961.JPG',
  '/images/slideshow/DSCF5686.jpeg',
]

// Duplicate so the second copy seamlessly follows the first.
// The animation moves exactly -50% (one full set), then resets invisibly.
const TRACK = [...IMAGES, ...IMAGES]

function useMobile() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 767px)').matches)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isMobile
}

function SlideshowOverlay() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: timeLeft.days, label: 'Days' },
  ]

  return (
    <>
      {/* Center vignette for readability */}
      <div style={{
        position: 'absolute',
        top: NAVBAR_HEIGHT, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0) 72%)',
        pointerEvents: 'none',
      }} />

      {/* Text */}
      <div style={{
        position: 'absolute',
        top: NAVBAR_HEIGHT, left: 0, right: 0, bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        padding: '0 24px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: '"Playfair Display", serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1.15rem, 3vw, 1.7rem)',
          letterSpacing: '0.06em',
          color: '#fff',
          margin: '0 0 20px',
          textShadow: '0 1px 10px rgba(0,0,0,0.65)',
        }}>
          Kualoa Ranch, Oahu &nbsp;·&nbsp; 25 June 2027
        </p>

        <div style={{ width: '36px', height: '1px', backgroundColor: '#D4AF37', margin: '0 0 24px', opacity: 0.95 }} />

        <div style={{ display: 'flex', gap: 'clamp(24px, 6vw, 56px)' }}>
          {units.map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center', minWidth: '72px' }}>
              <div style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
                color: '#fff',
                lineHeight: 1,
                fontWeight: 400,
                textShadow: '0 2px 18px rgba(0,0,0,0.55)',
              }}>
                {String(value).padStart(2, '0')}
              </div>
              <div style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.88)',
                marginTop: '10px',
                textShadow: '0 1px 6px rgba(0,0,0,0.5)',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export function Slideshow() {
  const isMobile = useMobile()
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!isMobile) return
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % IMAGES.length)
      }, 600)
    }, 4000)
    return () => clearInterval(id)
  }, [isMobile])

  if (isMobile) {
    return (
      <div style={{ position: 'relative', height: '100vh', paddingTop: NAVBAR_HEIGHT, overflow: 'hidden', backgroundColor: '#000' }}>
        <img
          src={IMAGES[index]}
          alt=""
          onLoad={() => setVisible(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease-in-out',
          }}
        />
        <SlideshowOverlay />
      </div>
    )
  }

  return (
    <div style={{ position: 'relative', height: '100vh', paddingTop: NAVBAR_HEIGHT, overflow: 'hidden', backgroundColor: '#fff' }}>
      <div
        style={{
          display: 'flex',
          height: '100%',
          animation: 'marquee 60s linear infinite',
          willChange: 'transform',
        }}
      >
        {TRACK.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            style={{
              height: '100%',
              width: '40vw',
              objectFit: 'cover',
              flexShrink: 0,
              marginRight: '12px',
            }}
          />
        ))}
      </div>
      <SlideshowOverlay />
    </div>
  )
}
