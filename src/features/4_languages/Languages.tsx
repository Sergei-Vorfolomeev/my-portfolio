import React from 'react'

import { useNavigate } from 'react-router-dom'

import s from './Languages.module.scss'

import myWorks from 'common/assets/img/my-works-cv.png'
import icon from 'common/assets/svg/icon-portfolio.svg'

export const Languages = () => {
  const navigate = useNavigate()

  return (
    <div className={s.box}>
      <img src={myWorks} alt="myWorks" />
      <div className={s.descriptionIconBox}>
        <div className={s.description}>
          <h4>My abilities</h4>
          <h1>Languages</h1>
        </div>
        <img src={icon} alt="icon" onClick={() => navigate('/2_about')} className={s.icon} />
      </div>
    </div>
  )
}
