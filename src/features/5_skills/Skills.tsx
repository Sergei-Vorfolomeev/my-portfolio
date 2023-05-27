import React from 'react'

import { useNavigate } from 'react-router-dom'

import myWorks from 'common/assets/img/my-works-cv.png'
import icon from 'common/assets/svg/icon-portfolio.svg'
import s from 'features/5_skills/Skills.module.scss'

export const Skills = () => {
  const navigate = useNavigate()

  return (
    <div className={s.box}>
      <div className={s.descriptionIconBox}>
        <div className={s.description}>
          <h4>My abilities</h4>
          <h1>Skills</h1>
        </div>
        <img src={icon} alt="icon" onClick={() => navigate('/2_about')} className={s.icon} />
      </div>
    </div>
  )
}
