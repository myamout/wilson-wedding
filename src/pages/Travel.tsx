import { StickyPhoto } from '@/components/StickyPhoto'

function SectionDivider() {
  return <div style={{ width: '100%', height: '1px', backgroundColor: '#e7e5e4', margin: '52px 0' }} />
}

function SectionHeader({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      {eyebrow && (
        <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AF37', margin: '0 0 10px' }}>
          {eyebrow}
        </p>
      )}
      <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.15rem, 3vw, 1.5rem)', letterSpacing: '0.08em', color: '#2C2C2C', fontWeight: 400, margin: 0 }}>
        {title}
      </h2>
    </div>
  )
}

function AreaHeader({ title }: { title: string }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', color: '#2C2C2C', fontWeight: 400, margin: '0 0 4px' }}>
        {title}
      </h3>
      <div style={{ width: '28px', height: '1px', backgroundColor: '#D4AF37' }} />
    </div>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.9rem', lineHeight: 1.8, color: '#78716c', margin: '0 0 16px' }}>
      {children}
    </p>
  )
}

function HotelCard({ name, address, description }: { name: string; address?: string; description?: string }) {
  return (
    <div style={{ borderLeft: '2px solid #D4AF37', paddingLeft: '20px', marginBottom: '32px' }}>
      <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '1rem', letterSpacing: '0.03em', color: '#2C2C2C', margin: '0 0 4px', fontWeight: 600 }}>
        {name}
      </p>
      {address && (
        <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '0.78rem', color: '#a8a29e', margin: '0 0 10px' }}>
          {address}
        </p>
      )}
      {description && (
        <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.88rem', lineHeight: 1.75, color: '#78716c', margin: 0 }}>
          {description}
        </p>
      )}
    </div>
  )
}

export default function Travel() {
  return (
    <div style={{ paddingTop: '130px', minHeight: '100vh', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <StickyPhoto src="/images/slideshow/IMG_2952.JPG" side="left" />
        <div style={{ flex: 1, maxWidth: '720px', margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Page heading */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AF37', margin: '0 0 12px' }}>
            Wilson Wedding
          </p>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2C2C2C', fontWeight: 400, margin: '0 0 20px' }}>
            Travel
          </h1>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#D4AF37', margin: '0 auto' }} />
        </div>

        {/* Getting Here */}
        <SectionHeader eyebrow="Arrival" title="Getting Here" />
        <Body>
          For your trip to Oahu, you'll fly into Daniel K. Inouye International Airport (HNL) in Honolulu. This is the main airport on the island and where most direct and connecting flights arrive.
        </Body>

        <SectionDivider />

        {/* Navigating the Island */}
        <SectionHeader eyebrow="Transportation" title="Navigating the Island" />
        <Body>
          We highly recommend renting a car for your stay. Oahu is very drivable, and having a car will give you the most flexibility to explore different parts of the island at your own pace, especially if you're staying in areas like the North Shore or Ko Olina. Rideshare services are available but can be limited or less convenient outside of Honolulu and Waikiki.
        </Body>

        <SectionDivider />

        {/* About Oahu */}
        <SectionHeader eyebrow="Island Tips" title="A Few Things to Know About Oahu" />
        <Body>
          Oahu is a beautiful and diverse island, and each area feels very different from the next. Travel times can vary more than expected, especially during peak hours around Honolulu, so we recommend building in extra time when heading to events or exploring.
        </Body>
        <Body>
          The island is very laid-back, so expect a slower pace and "island time" mindset. Traffic can build up quickly around Waikiki and on routes to the North Shore, particularly in the mornings and late afternoons.
        </Body>
        <Body>
          Weather is generally warm year-round, but it can change depending on where you are on the island. Windward (east) sides like Kualoa Ranch tend to be greener with occasional passing showers, while leeward sides are drier and sunnier.
        </Body>
        <Body>
          Most importantly, Oahu is incredibly special — with a mix of beaches, mountains, great food, and culture. We hope you take time to explore beyond the wedding weekend and enjoy everything the island has to offer.
        </Body>

        <SectionDivider />

        {/* Where to Stay */}
        <SectionHeader eyebrow="Accommodations" title="Where to Stay" />
        <Body>
          We recommend staying in one of these three areas depending on the kind of trip you're looking for.
        </Body>

        {/* Ko Olina */}
        <div style={{ marginTop: '36px', marginBottom: '40px' }}>
          <AreaHeader title="Ko Olina" />
          <Body>
            Ko Olina is calm, resort-style, and beautifully maintained, known for its peaceful lagoons and luxury beachfront resorts. It's ideal for guests looking for a more relaxed, elevated stay with a "vacation within a vacation" feel. The area is quieter and more secluded than Waikiki, perfect for unwinding and enjoying resort amenities.
          </Body>
          <Body>
            Ko Olina is very hotel and resort focused, with several properties as well as some condo-style vacation rentals. It's one of the easiest areas on the island for a true resort experience, with everything you need in one place.
          </Body>
          <div style={{ marginTop: '24px' }}>
            <HotelCard
              name="Ko Olina Beach Villas Resort"
              address="92-106 Waialii Pl, Kapolei, HI 96707"
              description="Located on the quiet lagoons of Ko Olina, about a 35–40 minute drive from Honolulu International Airport, this property is perfect for families and groups. It features spacious villa-style accommodations with full kitchens, in-unit laundry, large lanais, and one- to three-bedroom options. Guests can enjoy direct beach access, multiple pools, nearby golf courses, and walking distance to Ko Olina shops and restaurants."
            />
            <HotelCard
              name="Marriott's Ko Olina Beach Club"
              address="92-161 Waipahe Pl, Kapolei, HI 96707"
              description="Located on the Ko Olina lagoons about 35–40 minutes from Honolulu Airport, this is ideal for a relaxing resort stay. Especially great for couples and guests looking for a quieter getaway, with spacious villa-style rooms featuring kitchens or kitchenettes, private lanais, and in-unit laundry. Guests can enjoy pools, swimmable lagoons, and easy access to nearby dining, shops, and golf."
            />
            <HotelCard
              name="Four Seasons Resort Oahu at Ko Olina"
              address="92-1001 Olani St, Kapolei, HI 96707"
              description="Located in Ko Olina about 35–40 minutes from Honolulu Airport, the Four Seasons offers a luxury, full-service resort experience with ocean-view rooms, multiple pools, spa, fine dining, and beachfront lagoons. Ideal for guests looking for an elevated, quiet, and highly service-oriented stay close to the wedding venue."
            />
          </div>
        </div>

        {/* North Shore */}
        <div style={{ marginBottom: '40px' }}>
          <AreaHeader title="North Shore" />
          <Body>
            The North Shore is the most laid-back and scenic side of the island, known for its surf towns, food trucks, and slower pace of life. It feels very "classic Hawaii," with beautiful beaches, quiet mornings, and incredible sunsets. This area is best for guests looking for a relaxed, nature-focused stay away from crowds.
          </Body>
          <Body>
            Hotel options are more limited here, so accommodations are primarily Airbnb or vacation rentals, often in small beach cottages or homes tucked into local neighborhoods.
          </Body>
          <div style={{ marginTop: '24px' }}>
            <HotelCard name="Turtle Bay Resort" />
            <HotelCard name="Courtyard Oahu North Shore by Marriott" />
            <HotelCard name="Ke Iki Beach Bungalows" />
            <HotelCard
              name="Airbnb & Vacation Rentals"
              description="If you'd like more space or privacy, Oahu has many Airbnb, VRBO, and condo rentals that are great for families and groups, often including full kitchens and multiple bedrooms. Prices typically range from $200–$700+ per night depending on location and size. We suggest booking early as availability fills quickly."
            />
          </div>
        </div>

        {/* Waikiki */}
        <div style={{ marginBottom: '0' }}>
          <AreaHeader title="Waikiki" />
          <Body>
            Waikiki is the most lively and convenient area, bringing a true city energy to the island. If you want the feeling of being in a vibrant, walkable beach city with restaurants, shopping, nightlife, and nonstop activity, this is your spot. It's perfect for guests who want convenience, entertainment, and a more fast-paced, social atmosphere alongside beautiful beaches.
          </Body>
          <Body>
            Waikiki has the widest range of hotel options on Oahu, from luxury beachfront resorts to more budget-friendly stays. There are also some condo-style Airbnb options, though hotels are the most common and easiest choice here.
          </Body>
        </div>

        <SectionDivider />

        {/* Shuttle */}
        <SectionHeader eyebrow="Getting to the Venue" title="Shuttle Service" />
        <Body>
          Because our wedding venue, Kualoa Ranch, is located on the windward side of the island and is more secluded from major hotels and tourist areas, we will be providing shuttle transportation for guests. At minimum, there will be a shuttle from Waikiki, and we are also exploring additional shuttle service from Ko Olina depending on guest accommodations. More detailed timing and pick-up locations will be shared as the date gets closer.
        </Body>
        <Body>
          We highly encourage guests to take advantage of the shuttle service, as it allows for a stress-free way to get to and from the venue without worrying about driving, parking, or navigating the more remote roads leading to Kualoa. Please plan ahead for transportation and avoid any drinking and driving. We want everyone to be safe and able to fully enjoy the celebration.
        </Body>

        </div>
        <StickyPhoto src="/images/slideshow/IMG_2961.JPG" side="right" />
      </div>
    </div>
  )
}
