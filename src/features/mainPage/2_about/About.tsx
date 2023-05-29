import React from 'react'

import { useNavigate } from 'react-router-dom'

import signature from 'common/assets/img/signature.png'
import icon from 'common/assets/svg/icon-portfolio.svg'
import s from 'features/mainPage/2_about/About.module.scss'

export const About = () => {
  const navigate = useNavigate()

  return (
    <div className={s.box}>
      <img src={signature} alt="signature" />
      <div className={s.descriptionIconBox}>
        <div className={s.description}>
          <h4>More about me</h4>
          <h1>Profile</h1>
        </div>
        <img
          src={icon}
          alt="icon"
          onClick={() => {
            navigate('/about')
          }}
          className={s.icon}
        />
      </div>
    </div>
  )
}
