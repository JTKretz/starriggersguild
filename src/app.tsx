import { Router } from 'preact-router'
import { Home } from './pages/Home'
import { AssaultSpecialist } from './pages/AssaultSpecialist'
import { InnovativeOrdinance } from './pages/InnovativeOrdinance'
import { Fury } from './pages/Fury'
import { Concentration } from './pages/Concentration'
import { Marksmanship } from './pages/Marksmanship'
import { Sharpshooter } from './pages/Sharpshooter'

export function App() {
  return (
    <Router>
      <Home path="/" />
      <AssaultSpecialist path="/assault-specialist" />
      <InnovativeOrdinance path="/innovative-ordinance" />
      <Fury path="/fury" />
      <Concentration path="/concentration" />
      <Marksmanship path="/marksmanship" />
      <Sharpshooter path="/sharpshooter" />
    </Router>
  )
}
