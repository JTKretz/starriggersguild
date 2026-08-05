import { useState } from 'preact/hooks'

interface Star {
  x: number
  y: number
  r: number
  o: number
}

interface Nebula {
  x: number
  y: number
  size: number
  hue: 'violet' | 'cyan'
  o: number
}

interface Streak {
  x: number
  y: number
  angle: number
  length: number
  duration: number
  delay: number
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function generateStars(count: number, r: [number, number], o: [number, number]): Star[] {
  return Array.from({ length: count }, () => ({
    x: rand(0, 100),
    y: rand(0, 100),
    r: rand(r[0], r[1]),
    o: rand(o[0], o[1]),
  }))
}

function generateNebulae(count: number): Nebula[] {
  return Array.from({ length: count }, () => ({
    x: rand(5, 95),
    y: rand(5, 95),
    size: rand(9, 18),
    hue: Math.random() < 0.5 ? 'violet' : 'cyan',
    o: rand(0.1, 0.18),
  }))
}

function generateStreaks(count: number): Streak[] {
  return Array.from({ length: count }, () => ({
    x: rand(5, 70),
    y: rand(0, 40),
    angle: rand(20, 35),
    length: rand(90, 160),
    duration: rand(24, 42),
    delay: rand(-40, 0),
  }))
}

export function SpaceBackground() {
  const [nebulae] = useState(() => generateNebulae(4))
  const [starsFar] = useState(() => generateStars(260, [0.035, 0.075], [0.2, 0.55]))
  const [starsNear] = useState(() => generateStars(110, [0.06, 0.13], [0.5, 1]))
  const [streaks] = useState(() => generateStreaks(3))

  return (
    <div class="starfield" aria-hidden="true">
      <div class="depth depth--nebula">
        {nebulae.map((n, i) => (
          <div
            key={i}
            class={`nebula-patch nebula-patch--${n.hue}`}
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              width: `${n.size}vw`,
              height: `${n.size}vw`,
              opacity: n.o,
            }}
          />
        ))}
      </div>

      <div class="depth depth--far">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          {starsFar.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="white" opacity={s.o} />
          ))}
        </svg>
      </div>

      <div class="depth depth--near">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          {starsNear.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="white" opacity={s.o} />
          ))}
        </svg>
      </div>

      <div class="depth depth--streaks">
        {streaks.map((s, i) => (
          <span
            key={i}
            class="shooting-star"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.length}px`,
              '--angle': `${s.angle}deg`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
