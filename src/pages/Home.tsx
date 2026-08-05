import './Home.css'
import { SpaceBackground } from './SpaceBackground'

export function Home(_props: { path?: string }) {
  return (
    <div class="home">
      <SpaceBackground />
      <div class="vignette" aria-hidden="true" />

      <main class="hero">
        <span class="sigil" aria-hidden="true">✦</span>
        <h1 class="title">Starrigger&rsquo;s Guild</h1>
        <span class="rule" aria-hidden="true" />
      </main>
    </div>
  )
}
