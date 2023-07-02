import React from 'react'

import s from 'features/main-page/main-page.module.scss'

import { Profile } from 'features/main-page/1_profile/profile'
import { About } from 'features/main-page/2_about/about'
import { Projects } from 'features/main-page/3_projects/projects'
import { Languages } from 'features/main-page/4_languages/languages'
import { Skills } from 'features/main-page/5_skills/skills'
import { Contacts } from 'features/main-page/6_contacts/contacts'
import { Services } from 'features/main-page/7_services/services'
import { LetsWork } from 'features/main-page/8_lets-work/lets-work'
import { Navbar } from 'features/navbar/navbar'

export const MainPage = () => {
  return (
    <>
      <Navbar />
      <section className={s.gridBox}>
        <Profile />
        <About />
        <Projects />
        <Languages />
        <Skills />
        <Contacts />
        <Services />
        <LetsWork />
      </section>
    </>
  )
}
