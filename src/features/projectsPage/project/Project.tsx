import React from 'react'
import s from './Project.module.scss'
import { GitHubIcon } from 'common/components/icons/github/GitHubIcon'
import { CommonIcon } from "common/icons/common-icon/common-icon";

type PropsType = {
  style: {
    gridArea: string
  }
  img: string
  title: string
  description?: string
  projectLink: string
  repoLink: string
}

export const Project = ({ style, title, img, projectLink, repoLink }: PropsType) => {
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
          <CommonIcon />
        </a>
      </div>
    </div>
  )
}
