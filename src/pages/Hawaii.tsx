import { StickyPhoto } from '@/components/StickyPhoto'

type Item = { name: string; desc?: string; href?: string }

function SectionDivider() {
  return <div style={{ width: '100%', height: '1px', backgroundColor: '#e7e5e4', margin: '52px 0' }} />
}

function AreaHeader({ title }: { title: string }) {
  return (
    <div style={{ marginBottom: '16px', marginTop: '36px' }}>
      <h3 style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#2C2C2C', fontWeight: 400, margin: '0 0 6px' }}>
        {title}
      </h3>
      <div style={{ width: '24px', height: '1px', backgroundColor: '#D4AF37' }} />
    </div>
  )
}

function CategoryLabel({ label }: { label: string }) {
  return (
    <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#D4AF37', margin: '24px 0 8px' }}>
      {label}
    </p>
  )
}

function RecommendationList({ items }: { items: Item[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: '0 0 4px', padding: 0 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: '12px', padding: '7px 0', borderBottom: i < items.length - 1 ? '1px solid #f5f5f4' : undefined, alignItems: 'baseline' }}>
          <span style={{ color: '#D4AF37', flexShrink: 0, fontSize: '0.8rem' }}>·</span>
          <span>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.9rem', color: '#2C2C2C', textDecoration: 'underline', textDecorationColor: '#D4AF37', textUnderlineOffset: '3px' }}>
                {item.name}
              </a>
            ) : (
              <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.9rem', color: '#2C2C2C' }}>{item.name}</span>
            )}
            {item.desc && (
              <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.82rem', color: '#a8a29e', fontStyle: 'italic' }}> — {item.desc}</span>
            )}
          </span>
        </li>
      ))}
    </ul>
  )
}

const NORTH_SHORE_EATS: Item[] = [
  { name: 'Sunrise Shack', desc: 'coffee and açaí bowls' },
  { name: 'Sailors', desc: 'coffee' },
  { name: "Lil Mama's", desc: 'breakfast sandwich' },
  { name: 'Makua Banana Bread' },
  { name: 'Haleiwa Bowls', desc: 'açaí' },
  { name: "The Bird's Nest", desc: 'coffee' },
  { name: 'Kua Aina Sandwich' },
  { name: "Ted's Bakery" },
  { name: 'Coffee Cove' },
  { name: 'Poke for the People', desc: 'poke' },
  { name: 'Surf and Salsa' },
  { name: 'Seven Brothers', desc: 'burgers' },
  { name: 'Haleiwa Joes', desc: 'seafood & steak on the marina' },
  { name: "Giovanni's Shrimp Truck" },
  { name: 'Jax Wood Fired Pizza' },
  { name: 'Matsumoto Shave Ice' },
]

const WAIKIKI_EATS: Item[] = [
  { name: 'Sunrise Shack', desc: 'açaí bowls' },
  { name: 'Poke from Foodlands' },
  { name: 'Surf & Turf Tacos' },
  { name: "Luigi's Pizza" },
  { name: "Lulu's", desc: 'burgers with a view of Waikiki Beach' },
  { name: "Leonard's Bakery", desc: 'try the Malasadas' },
  { name: 'The Deck' },
  { name: "Ululani's Shave Ice!" },
]

const KO_OLINA_EATS: Item[] = [
  { name: 'Farm to Barn Cafe and Juicery' },
  { name: 'Island Country Markets', desc: 'poke bowls' },
  { name: 'Monkeypod Kitchen', desc: 'must-have Mai Tai' },
  { name: '808 Craft House' },
  { name: 'Manalo Lounge' },
  { name: 'La Hiki' },
  { name: 'Noe Italian Food' },
  { name: "Mina's Fish House" },
]

const OAHU_HIKES: Item[] = [
  { name: 'Koko Crater', desc: 'straight stairs for an hour' },
  { name: 'Wiliwilinui Ridge Trail' },
  { name: "Deadman's Catwalk" },
  { name: 'Manoa Falls', desc: 'easy walk to a waterfall' },
  { name: 'Lanikai Pillbox', desc: 'beginner friendly' },
  { name: "Makapu'u Lighthouse Trail" },
  { name: 'Diamond Head Trail' },
]

const OAHU_ACTIVITIES: Item[] = [
  { name: 'ATV Adventures or Zip Lining' },
  { name: 'Helicopter Ride' },
  { name: 'Snorkeling', desc: "Sharks Cove, Lanikai Beach, and Hanauma Bay (state park — tickets required)" },
  { name: 'Snorkeling Boat Tour' },
  { name: 'Dole Plantation' },
  { name: "Ho'omaluhia Botanical Garden" },
  { name: 'Surfing & Surf Lessons' },
  { name: 'Sunset Boat Cruise' },
]

const PRINCEVILLE_EATS: Item[] = [
  { name: 'Wishing Well', desc: 'coffee, smoothies, juices & shave ice — Hanalei Bay' },
  { name: 'Bar Acuda', desc: 'tapas bar — Hanalei Bay' },
  { name: 'Ama Restaurant', desc: 'cocktails — Hanalei Bay' },
  { name: '1 Hotel Hanalei Bay', desc: 'food and the view' },
]

const KAPAA_EATS: Item[] = [
  { name: "Kountry Style Kitchen" },
]

const POIPU_EATS: Item[] = [
  { name: 'Little Fish Coffee' },
  { name: 'Eden Coffee' },
  { name: "Anake's Juice Bar", desc: 'açaí bowls — Kukuiula Market' },
  { name: 'Puka Dog' },
  { name: 'Eating House 1849' },
  { name: 'Beach House Restaurant' },
  { name: 'Java Kai', desc: 'Koloa' },
  { name: 'Kauai Juice Co.', desc: 'Koloa' },
  { name: 'Taco Libre', desc: 'food truck — Koloa' },
  { name: 'The Musubi Truck', desc: 'Koloa' },
  { name: 'Sueoka Market', desc: 'fresh Malasadas — Fridays 3:00 PM – 6:00 PM' },
]

const KAUAI_ACTIVITIES: Item[] = [
  { name: 'Nā Pali Coast Boat Tour' },
  { name: 'Hike Waimea Canyon' },
  { name: 'Doors-Off Helicopter Tour' },
  { name: 'Beach Day' },
  { name: 'Kayak Wailua River' },
  { name: 'Spa Day' },
  { name: 'Golf' },
  { name: "Hike Nā Pali Coast State Wilderness Park", desc: 'reservation required', href: 'https://gohaena.com' },
  { name: "Kaua'i Rum Safari" },
]

export default function Hawaii() {
  return (
    <div style={{ paddingTop: '130px', minHeight: '100vh', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <StickyPhoto src="/images/slideshow/IMG_2980.JPG" side="left" />
        <div style={{ flex: 1, maxWidth: '720px', margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Page heading */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AF37', margin: '0 0 12px' }}>
            Wilson Wedding
          </p>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2C2C2C', fontWeight: 400, margin: '0 0 20px' }}>
            Explore Hawaii
          </h1>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#D4AF37', margin: '0 auto' }} />
        </div>

        {/* ── OAHU ── */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AF37', margin: '0 0 8px' }}>
            Island Guide
          </p>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.3rem, 3.5vw, 1.9rem)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C2C2C', fontWeight: 400, margin: 0 }}>
            Oahu
          </h2>
        </div>

        {/* North Shore */}
        <AreaHeader title="North Shore" />
        <CategoryLabel label="Favorite Bites" />
        <RecommendationList items={NORTH_SHORE_EATS} />

        {/* Waikiki */}
        <AreaHeader title="Waikiki" />
        <CategoryLabel label="Favorite Bites" />
        <RecommendationList items={WAIKIKI_EATS} />

        {/* Ko Olina */}
        <AreaHeader title="Ko Olina" />
        <CategoryLabel label="Favorite Bites" />
        <RecommendationList items={KO_OLINA_EATS} />

        {/* Oahu Things to Do */}
        <AreaHeader title="Things to Do" />
        <CategoryLabel label="Hikes" />
        <RecommendationList items={OAHU_HIKES} />
        <CategoryLabel label="Activities" />
        <RecommendationList items={OAHU_ACTIVITIES} />

        <SectionDivider />

        {/* ── KAUAI ── */}
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AF37', margin: '0 0 8px' }}>
            Neighboring Island
          </p>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.3rem, 3.5vw, 1.9rem)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C2C2C', fontWeight: 400, margin: '0 0 12px' }}>
            Kauai
          </h2>
          <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '0.88rem', color: '#78716c', margin: 0 }}>
            A short inter-island flight from Honolulu — well worth the trip.
          </p>
        </div>

        {/* Princeville */}
        <AreaHeader title="Princeville" />
        <CategoryLabel label="Favorite Bites" />
        <RecommendationList items={PRINCEVILLE_EATS} />

        {/* Kapa'a */}
        <AreaHeader title="Kapa'a" />
        <CategoryLabel label="Favorite Bites" />
        <RecommendationList items={KAPAA_EATS} />

        {/* Poipu */}
        <AreaHeader title="Poipū" />
        <CategoryLabel label="Favorite Bites" />
        <RecommendationList items={POIPU_EATS} />

        {/* Kauai Activities */}
        <AreaHeader title="Things to Do" />
        <CategoryLabel label="Activities" />
        <RecommendationList items={KAUAI_ACTIVITIES} />

        </div>
        <StickyPhoto src="/images/slideshow/IMG_2982.JPG" side="right" />
      </div>
    </div>
  )
}
