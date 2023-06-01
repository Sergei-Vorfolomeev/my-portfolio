import React from 'react'

import s from './Project.module.scss'

import icon from 'common/assets/svg/icon-portfolio.svg'
import { GitHubIcon } from 'common/components/icons/github/GitHubIcon'

type PropsType = {
  style: {
    gridArea: string
    // gridColumnStart: number
    // gridColumnEnd: number | string
    // gridRowStart: number
    // gridRowEnd: number | string
  }
  img: string
  title: string
  description?: string
  projectLink: string
  repoLink: string
}

export const Project = ({ style, title, img, description, projectLink, repoLink }: PropsType) => {
  return (
    <div className={s.project} style={style}>
      <div className={s.imgBox}>
        <img src={img} alt="myWorks" />
        <a href={projectLink} className={s.btn}>
          Watch
        </a>
      </div>
      <div className={s.description}>
        <div className={s.projectInfo}>
          <a href={projectLink} className={s.projectTitle}>
            <h1>{title}</h1>
          </a>
          <p>
            <GitHubIcon link={repoLink} />
            {'<--'} check my code here
          </p>
        </div>
        <a href={projectLink}>
          <img src={icon} alt="icon" className={s.icon} />
        </a>
      </div>
    </div>
  )
}
