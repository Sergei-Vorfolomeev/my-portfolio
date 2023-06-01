import React from 'react'

import s from './MainPage.module.scss'

import { Profile } from 'features/mainPage/1_profile/Profile'
import { About } from 'features/mainPage/2_about/About'
import { Projects } from 'features/mainPage/3_projects/Projects'
import { Languages } from 'features/mainPage/4_languages/Languages'
import { Skills } from 'features/mainPage/5_skills/Skills'
import { Contacts } from 'features/mainPage/6_contacts/Contacts'
import { Services } from 'features/mainPage/7_services/Services'
import { LetsWork } from 'features/mainPage/8_letsWork/LetsWork'
import { Navbar } from 'features/navbar/Navbar'

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
