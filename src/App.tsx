import React from 'react'

import s from 'App.module.scss'
import { Profile } from 'features/1_profile/Profile'
import { About } from 'features/2_about/About'
import { Projects } from 'features/3_projects/Projects'
import { Languages } from 'features/4_languages/Languages'
import { Skills } from 'features/5_skills/Skills'
import { Contacts } from 'features/6_contacts/Contacts'
import { Services } from 'features/7_services/Services'
import { LetsWork } from 'features/8_letsWork/LetsWork'

function App() {
  return (
    <div className={s.app}>
      <div className={s.gridBox}>
        <Profile />
        <About />
        <Projects />
        <Languages />
        <Skills />
        <Contacts />
        <Services />
        <LetsWork />
      </div>
    </div>
  )
}

export default App
