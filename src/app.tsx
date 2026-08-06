import { Router } from 'preact-router'
import { Home } from './pages/Home'
import { AssaultSpecialist } from './pages/AssaultSpecialist'
import { InnovativeOrdinance } from './pages/InnovativeOrdinance'
import { Fury } from './pages/Fury'
import { Concentration } from './pages/Concentration'

export function App() {
  return (
    <Router>
      <Home path="/" />
      <AssaultSpecialist path="/assault-specialist" />
      <InnovativeOrdinance path="/innovative-ordinance" />
      <Fury path="/fury" />
      <Concentration path="/concentration" />
    </Router>
  )
}
