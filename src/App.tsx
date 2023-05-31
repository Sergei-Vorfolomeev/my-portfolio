import React from 'react'

import { Route, Routes } from 'react-router-dom'

import s from 'App.module.scss'
import { AboutPage } from 'features/aboutPage/AboutPage'
import { MainPage } from 'features/mainPage/MainPage'
import { ProjectsPage } from 'features/projectsPage/ProjectsPage'

function App() {
  return (
    <div className={s.app}>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/projects'} element={<ProjectsPage />} />
      </Routes>
    </div>
  )
}

export default App
