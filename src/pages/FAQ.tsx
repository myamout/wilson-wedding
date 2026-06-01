import { StickyPhoto } from '@/components/StickyPhoto'

const FAQS = [
  {
    q: 'Where are the bride and groom staying?',
    a: 'We will be staying in Ko Olina. There are a few hotels in Ko Olina — we will be at the Ko Olina Beach Villas Resort, then moving to the XXX the following days after the Wedding Ceremony.',
  },
  {
    q: 'Where should I stay?',
    a: 'There are many options depending on your preferences. Please see the Travel section of the website for a full list of recommendations.',
  },
  {
    q: 'Who can I bring?',
    a: 'Please refer to your invitation for your invited guests and any designated +1s. Due to venue capacity and our desire to keep the celebration intimate, we\'re only able to accommodate those specifically listed on the invitation, including children if noted. Please reach out if further clarification is needed.',
  },
  {
    q: 'What time should I arrive at the Ceremony?',
    a: 'Our ceremony will begin promptly at 4:30 PM. We kindly ask guests to arrive early enough to be seated before the ceremony begins to avoid interruptions. Please note there may be a short walk from the drop-off area to the ceremony and reception space, so we recommend allowing a little extra time to get settled.',
  },
  {
    q: 'What should I do if I can\'t make it?',
    a: 'You will be missed! If you are unable to attend, please let us know as soon as possible and RSVP "no" so we can plan accordingly.',
  },
  {
    q: 'Is the wedding indoors or outdoors?',
    a: 'The ceremony is outdoors and the reception will be outside under a covered tent.',
  },
  {
    q: 'What kind of shoes should I wear?',
    a: 'Calling all ladies — do not wear stilettos or high heels. The wedding is outside on grass, which can make walking in high heels difficult. Save your feet for the dance floor!',
  },
  {
    q: 'How can I get to the venue and back?',
    a: 'We will be providing shuttle transportation to and from the wedding from certain locations — please see the Events page for details.\n\nParking is also available on the three levels to the right of the venue roadway; look for the guest parking signs. Please do not use the main ranch parking as it is a considerable distance from the venue, and note that overnight parking is prohibited. We will also be offering a complimentary shuttle picking up and dropping off guests at the ZYX.\n\nWe are unsure how reliable rideshares will be in this area, as the reception is a bit secluded from town, so please plan ahead.',
  },
  {
    q: 'What if I have a dietary restriction?',
    a: 'Please notify us of any dietary restrictions or food allergies when you RSVP. If you missed that, feel free to contact us directly.',
  },
  {
    q: 'Can I take photos during the wedding?',
    a: 'We kindly ask that guests refrain from taking photos during the ceremony so everyone can be fully present and our photographer can capture the moment. Once the ceremony concludes, please feel free to take photos and share away throughout the rest of the celebration.',
  },
  {
    q: 'What time will the reception end?',
    a: 'The reception will end promptly at 10:00 PM. The shuttle to Waikiki and Ko Olina will depart at XXX PM.',
  },
  {
    q: 'Who should I contact with questions?',
    a: 'Please text Alli at (831) 214-7576.',
  },
]

export default function FAQ() {
  return (
    <div style={{ paddingTop: '130px', minHeight: '100vh', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>

        <StickyPhoto src="/images/slideshow/DSCF3981.JPG" side="left" />

        {/* Content */}
        <div style={{ flex: 1, maxWidth: '720px', margin: '0 auto', padding: '48px 24px 80px' }}>

          {/* Page heading */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AF37', margin: '0 0 12px' }}>
              Wilson Wedding
            </p>
            <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', letterSpacing: 'clamp(0.06em, 1.5vw, 0.12em)', textTransform: 'uppercase', color: '#2C2C2C', fontWeight: 400, margin: '0 0 20px' }}>
              Frequently Asked Questions
            </h1>
            <div style={{ width: '48px', height: '1px', backgroundColor: '#D4AF37', margin: '0 auto' }} />
          </div>

          {/* FAQ list */}
          <div>
            {FAQS.map((item, i) => (
              <div
                key={i}
                style={{
                  borderTop: i === 0 ? '1px solid #e7e5e4' : undefined,
                  borderBottom: '1px solid #e7e5e4',
                  padding: '28px 0',
                }}
              >
                <h3 style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '1rem',
                  letterSpacing: '0.04em',
                  color: '#2C2C2C',
                  fontWeight: 600,
                  margin: '0 0 12px',
                  lineHeight: 1.5,
                }}>
                  {item.q}
                </h3>
                {item.a.split('\n\n').map((para, j) => (
                  <p key={j} style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '0.9rem',
                    lineHeight: 1.75,
                    color: '#78716c',
                    margin: j === 0 ? 0 : '12px 0 0',
                  }}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

        </div>

        <StickyPhoto src="/images/slideshow/DSCF5686.jpeg" side="right" />

      </div>
    </div>
  )
}
