import React from 'react'

import { useNavigate } from 'react-router-dom'

import myWorks from 'common/assets/img/my-works-cv.png'
import icon from 'common/assets/svg/icon-portfolio.svg'
import s from 'features/mainPage/3_projects/Projects.module.scss'
import { CommonIcon } from "common/icons/common-icon/common-icon";

export const Projects = () => {
  const navigate = useNavigate()

  return (
    <div
      className={s.box}
      onClick={() => {
        navigate('/projects')
      }}
    >
      <div className={s.myWorksBox}>
        <img src={myWorks} alt="myWorks"  />
      </div>
      <div className={s.descriptionIconBox}>
        <div className={s.description}>
          <h4>Show cases</h4>
          <h1>Projects</h1>
        </div>
        <CommonIcon />
      </div>
    </div>
  )
}
