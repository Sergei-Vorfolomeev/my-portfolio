import React from 'react'
import { useNavigate } from 'react-router-dom'
import myWorks from 'common/assets/img/my-works-cv.png'
import s from 'features/main-page/3_projects/projects.module.scss'
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
