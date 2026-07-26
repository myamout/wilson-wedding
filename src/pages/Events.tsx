import { StickyPhoto } from '@/components/StickyPhoto'

const SCHEDULE = [
  { time: 'Welcome Bubbles', hours: '3:45 PM – 4:15 PM' },
  { time: 'Ceremony', hours: '4:30 PM – 5:00 PM' },
  { time: 'Cocktail Hour', hours: '5:00 PM – 6:00 PM' },
  { time: 'Dinner', hours: '6:00 PM – 7:00 PM' },
  { time: 'Dancing & Celebration', hours: '7:00 PM – 10:00 PM' },
]

export default function Events() {
  return (
    <div style={{ paddingTop: '130px', minHeight: '100vh', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <StickyPhoto src="/images/slideshow/DSCF4585.JPG" side="left" />
        <div style={{ flex: 1, maxWidth: '720px', margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Page heading */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AF37', margin: '0 0 12px' }}>
            Wilson Wedding
          </p>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2C2C2C', fontWeight: 400, margin: '0 0 20px' }}>
            Events
          </h1>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#D4AF37', margin: '0 auto' }} />
        </div>

        {/* Beachside Welcome */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', letterSpacing: '0.08em', color: '#2C2C2C', fontWeight: 400, margin: '0 0 8px' }}>
              Beachside Welcome
            </h2>
            <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#78716c', margin: '0 0 6px' }}>
              Thursday, June 24th, 2027
            </p>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D4AF37', margin: '0 0 16px' }}>
              Optional
            </p>
            <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#78716c', textAlign: 'center', margin: 0 }}>
              Details to come
            </p>
          </div>
        </div>

        <div style={{ width: '100%', height: '1px', backgroundColor: '#e7e5e4', marginBottom: '56px' }} />

        {/* The Wedding */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', letterSpacing: '0.08em', color: '#2C2C2C', fontWeight: 400, margin: '0 0 8px' }}>
              The Wedding
            </h2>
            <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#78716c', margin: '0 0 6px' }}>
              Paliku Gardens at Kualoa Ranch
            </p>
            <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#78716c', margin: '0 0 6px' }}>
              Kaneohe, Oahu, Hawaii
            </p>
            <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#78716c', margin: 0 }}>
              Friday, June 25th, 2027
            </p>
          </div>

          <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#78716c', textAlign: 'center', margin: 0 }}>
            Details to come
          </p>
        </div>

        <div style={{ width: '100%', height: '1px', backgroundColor: '#e7e5e4', marginBottom: '56px' }} />

        {/* Dress Code */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', letterSpacing: '0.08em', color: '#2C2C2C', fontWeight: 400, margin: '0 0 8px' }}>
              Wedding Ceremony
            </h2>
            <div style={{ width: '32px', height: '1px', backgroundColor: '#D4AF37', margin: '0 auto' }} />
          </div>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.9rem', lineHeight: 1.8, color: '#78716c', margin: 0, textAlign: 'center' }}>
            The dress code for our wedding is tropical cocktail attire / semi-formal. Ladies are encouraged to wear long, colorful dresses, and gentlemen should wear business formal with button downs and dress pants. Since the ceremony will take place on grass at Kualoa Ranch, we recommend sandals, wedges, flats, or thicker heels for women. Gentlemen, we kindly ask that shorts, flip-flops, and Hawaiian shirts stay back at the hotel for this one.
          </p>
        </div>

        </div>
        <StickyPhoto src="/images/slideshow/IMG_2993.JPG" side="right" />
      </div>
    </div>
  )
}
