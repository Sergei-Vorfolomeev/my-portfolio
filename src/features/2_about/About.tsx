import React from 'react'

import { useNavigate } from 'react-router-dom'

import s from './About.module.scss'

import signature from 'common/assets/img/signature.png'
import icon from 'common/assets/svg/icon-portfolio.svg'

export const About = () => {
  const navigate = useNavigate()
  const onClickHandler = () => {
    debugger
    navigate('/2_about')
  }

  return (
    <div className={s.flipBox}>
      <img src={signature} alt="signature" />
      <div className={s.descriptionIconBox}>
        <div className={s.description}>
          <h4>More about me</h4>
          <h1>Profile</h1>
        </div>
        <img src={icon} alt="icon" onClick={onClickHandler} className={s.icon} />
      </div>
    </div>
  )
}
