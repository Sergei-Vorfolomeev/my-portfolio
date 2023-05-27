import React from 'react'

import s from './Profile.module.scss'

import icon from 'common/assets/svg/icon-portfolio.svg'

export const Profile = () => {
  return (
    <div className={s.flipBox}>
      <div className={s.photoBox}>
        <div className={s.photo}></div>
      </div>

      <div className={s.description}>
        <h4>Frontend developer</h4>
        <h1>Sergey Vorfolomeev</h1>
        <p>I am a Frontend Developer based in Prague</p>
        <img src={icon} alt="icon" className={s.icon} />
      </div>
    </div>
  )
}
