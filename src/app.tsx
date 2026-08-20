import { Router } from 'preact-router'
import { Home } from './pages/Home'
import { AssaultSpecialist } from './pages/AssaultSpecialist'
import { InnovativeOrdinance } from './pages/InnovativeOrdinance'
import { Fury } from './pages/Fury'
import { Concentration } from './pages/Concentration'
import { Marksmanship } from './pages/Marksmanship'
import { Sharpshooter } from './pages/Sharpshooter'
import { Engineering } from './pages/Engineering'
import { Saboteur } from './pages/Saboteur'
import { Hatred } from './pages/Hatred'
import { Serenity } from './pages/Serenity'
import { HatredLeveling } from './pages/HatredLeveling'

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
      <Engineering path="/engineering" />
      <Saboteur path="/saboteur" />
      <Hatred path="/hatred" />
      <Serenity path="/serenity" />
      <HatredLeveling path="/hatred-leveling" />
    </Router>
  )
}
