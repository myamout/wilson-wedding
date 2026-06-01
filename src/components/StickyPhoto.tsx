import { useState } from 'react'

export function StickyPhoto({ src, side }: { src: string; side: 'left' | 'right' }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className="hidden xl:block"
      style={{
        width: '200px',
        flexShrink: 0,
        position: 'sticky',
        top: '130px',
        height: 'calc(100vh - 130px)',
        padding: side === 'left' ? '48px 0 48px 24px' : '48px 24px 48px 0',
      }}
    >
      <div style={{ width: '100%', height: '100%', backgroundColor: '#ede9e4' }}>
      <img
        src={src}
        alt=""
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out',
        }}
      />
      </div>
    </div>
  )
}
