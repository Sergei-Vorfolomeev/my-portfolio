import React from 'react'

import s from './ProjectsPage.module.scss'

import orbitaImg from 'common/assets/img/astronaut900.jpg'
import flashCardsImg from 'common/assets/img/flashCardsImg.png'
import projectImg from 'common/assets/img/projectImg.jpeg'
import socialNetworkImg from 'common/assets/img/socialNetwork.avif'
import todolistImg from 'common/assets/img/stickersImg.jpeg'
import todolistNgImg from 'common/assets/img/todolistImg.jpeg'
import { Project } from 'features/projectsPage/project/Project'

export type ProjectType = {
  id: number
  title: string
  img: string
  style: {
    gridColumnStart: number
    gridColumnEnd: number | string
    gridRowStart: number
    gridRowEnd: number | string
  }
  description?: string
  projectLink: string
  repoLink: string
}

export const ProjectsPage = () => {
  const projects: ProjectType[] = [
    {
      id: 0,
      title: 'Portfolio',
      img: projectImg,
      style: {
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRowStart: 1,
        gridRowEnd: 5,
      },
      projectLink: '',
      repoLink: '',
    },
    {
      id: 1,
      title: 'Tasks Manager',
      img: todolistImg,
      style: { gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 2, gridRowEnd: 6 },
      projectLink: 'https://sergei-vorfolomeev.github.io/todolist-ts-01/',
      repoLink: 'https://github.com/Sergei-Vorfolomeev/todolist-ts-01',
    },

    {
      id: 2,
      title: 'Flash Cards',
      img: flashCardsImg,
      style: { gridColumnStart: 3, gridColumnEnd: 'end', gridRowStart: 2, gridRowEnd: 6 },
      projectLink: 'https://sergei-vorfolomeev.github.io/cards-project/',
      repoLink: 'https://github.com/Sergei-Vorfolomeev/cards-project',
    },

    {
      id: 3,
      title: 'Orbita',
      img: orbitaImg,
      style: { gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 5, gridRowEnd: 'end' },
      projectLink: 'https://sergei-vorfolomeev.github.io/orbita-project/',
      repoLink: 'https://github.com/Sergei-Vorfolomeev/orbita-project',
    },

    {
      id: 4,
      title: 'Social Network',
      img: socialNetworkImg,
      style: { gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 6, gridRowEnd: 'end' },
      projectLink: 'https://sergei-vorfolomeev.github.io/new-social-network/',
      repoLink: 'https://github.com/Sergei-Vorfolomeev/new-social-network',
    },

    {
      id: 5,
      title: 'Todolist on Angular',
      img: todolistNgImg,
      style: { gridColumnStart: 3, gridColumnEnd: 'end', gridRowStart: 6, gridRowEnd: 'end' },
      projectLink: '',
      repoLink: 'https://github.com/Sergei-Vorfolomeev/todolist-angular',
    },
  ]

  return (
    <section className={s.mainBox}>
      <div className={s.gridBox}>
        <div className={s.titleBox}>
          <h1>Projects</h1>
        </div>

        {projects.map(el => (
          <Project
            key={el.id}
            img={el.img}
            style={el.style}
            title={el.title}
            description={el.description}
            projectLink={el.projectLink}
            repoLink={el.repoLink}
          />
        ))}
      </div>
    </section>
  )
}
