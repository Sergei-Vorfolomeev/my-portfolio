import React from 'react'
import s from 'features/projects-page/project/project.module.scss'
import { RepoLinkIcon } from 'common/icons/repo-link-icon/repo-link-icon'
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
            <RepoLinkIcon link={repoLink} />
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
