import React from 'react'

import { useNavigate } from 'react-router-dom'

import icon from 'common/assets/svg/icon-portfolio.svg'
import s from 'features/mainPage/8_letsWork/LetsWork.module.scss'

export const LetsWork = () => {
  const navigate = useNavigate()

  return (
    <div className={s.flipBox}>
      <div className={s.descriptionIconBox}>
        <div className={s.description}>
          <h1>
            Let&apos;s
            <br />
            work <span>together</span>
          </h1>
        </div>
        <img src={icon} alt="icon" onClick={() => navigate('/2_about')} className={s.icon} />
      </div>
    </div>
  )
}
