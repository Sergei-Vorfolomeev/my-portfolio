import React from 'react'

import { Route, Routes } from 'react-router-dom'

import s from 'app.module.scss'
import { AboutPage } from 'features/about-page/about-page'
import { MainPage } from 'features/main-page/main-page'
import { ProjectsPage } from 'features/projects-page/projects-page'

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
