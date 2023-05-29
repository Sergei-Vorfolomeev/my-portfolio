import React from 'react'

import { useNavigate } from 'react-router-dom'

import icon from 'common/assets/svg/icon-portfolio.svg'
import s from 'features/mainPage/7_services/Services.module.scss'

export const Services = () => {
  const navigate = useNavigate()

  return (
    <div className={s.flipBox}>
      <div className={s.descriptionIconBox}>
        <div className={s.description}>
          {/*<h4>My abilities</h4>*/}
          <h1>Services</h1>
        </div>
        <img src={icon} alt="icon" onClick={() => navigate('/2_about')} className={s.icon} />
      </div>
    </div>
  )
}
