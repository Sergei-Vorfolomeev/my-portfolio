import React from 'react'

import { Route, Routes } from 'react-router-dom'

import s from 'App.module.scss'
import { AboutPage } from 'features/aboutPage/AboutPage'
import { MainPage } from 'features/mainPage/MainPage'

function App() {
  return (
    <div className={s.app}>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/about'} element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App
