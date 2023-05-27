import React from 'react'

import { useNavigate } from 'react-router-dom'

import s from './Services.module.scss'

import icon from 'common/assets/svg/icon-portfolio.svg'

export const Services = () => {
  const navigate = useNavigate()

  return (
    <div className={s.box}>
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
