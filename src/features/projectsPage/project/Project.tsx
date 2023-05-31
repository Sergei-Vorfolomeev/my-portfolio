import React from 'react'

import s from './Project.module.scss'

import projectImg from 'common/assets/img/projectImg.jpeg'
import icon from 'common/assets/svg/icon-portfolio.svg'

type PropsType = {
  style: {
    gridColumnStart: number
    gridColumnEnd: number
    gridRowStart: number
    gridRowEnd: number | string
  }
}

export const Project = (props: PropsType) => {
  return (
    <div className={s.project} style={props.style}>
      <img src={projectImg} alt="myWorks" />
      <div className={s.description}>
        <div className={s.projectInfo}>
          <p>WEB DESIGNING</p>
          <h1>Photographer&apos;s portfolio</h1>
        </div>
        <img src={icon} alt="" className={s.icon} />
      </div>
    </div>
  )
}
