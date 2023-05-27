import React from 'react'

import { useNavigate } from 'react-router-dom'

import s from './Contacts.module.scss'

import myWorks from 'common/assets/img/my-works-cv.png'
import icon from 'common/assets/svg/icon-portfolio.svg'

export const Contacts = () => {
  const navigate = useNavigate()

  return (
    <div className={s.flipBox}>
      <div className={s.flipCard}>
        <div className={s.front}>
          <img src={myWorks} alt="myWorks" />
          <div className={s.descriptionIconBox}>
            <div className={s.description}>
              <h4>Get in touch</h4>
              <h1>Contacts</h1>
            </div>
            <img src={icon} alt="icon" onClick={() => navigate('/2_about')} className={s.icon} />
          </div>
        </div>
        <div className={s.back}>BACK</div>
      </div>
    </div>
  )
}
