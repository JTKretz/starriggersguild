import { Router } from 'preact-router'
import { Home } from './pages/Home'
import { AssaultSpecialist } from './pages/AssaultSpecialist'

export function App() {
  return (
    <Router>
      <Home path="/" />
      <AssaultSpecialist path="/assault-specialist" />
    </Router>
  )
}
