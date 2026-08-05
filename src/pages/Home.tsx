import { useState } from 'preact/hooks'
import './Home.css'

interface NebulaPlacement {
  src: string
  x: number
  y: number
  size: number
  rotate: number
  hue: number
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function generateNebulae(): NebulaPlacement[] {
  return [
    {
      src: '/nebula/bubble.jpg',
      x: rand(8, 28),
      y: rand(15, 35),
      size: rand(30, 40),
      rotate: rand(-15, 15),
      hue: rand(-20, 20),
    },
    {
      src: '/nebula/veil.jpg',
      x: rand(70, 92),
      y: rand(60, 85),
      size: rand(32, 42),
      rotate: rand(-15, 15),
      hue: rand(-20, 20),
    },
  ]
}

export function Home(_props: { path?: string }) {
  const [nebulae] = useState(() => generateNebulae())

  return (
    <div class="home">
      <div class="stars stars--far" aria-hidden="true" />
      <div class="stars stars--near" aria-hidden="true" />
      <div class="nebula" aria-hidden="true">
        {nebulae.map((n, i) => (
          <img
            key={i}
            class="nebula-img"
            src={n.src}
            alt=""
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              width: `${n.size}vw`,
              transform: `translate(-50%, -50%) rotate(${n.rotate}deg)`,
              filter: `hue-rotate(${n.hue}deg) saturate(1.3) brightness(0.85)`,
            }}
          />
        ))}
      </div>
      <div class="vignette" aria-hidden="true" />

      <main class="hero">
        <span class="sigil" aria-hidden="true">✦</span>
        <h1 class="title">Starrigger&rsquo;s Guild</h1>
        <span class="rule" aria-hidden="true" />
      </main>

      <p class="credit">Nebula imagery: NASA, ESA/Hubble</p>
    </div>
  )
}
