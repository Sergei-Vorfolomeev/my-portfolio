import React from 'react'

import s from './ProjectsPage.module.scss'

import orbitaImg from 'common/assets/img/astronaut900.jpg'
import flashCardsImg from 'common/assets/img/flashCardsImg.png'
import projectImg from 'common/assets/img/projectImg.jpeg'
import socialNetworkImg from 'common/assets/img/socialNetwork.avif'
import todolistImg from 'common/assets/img/stickersImg.jpeg'
import todolistNgImg from 'common/assets/img/todolistImg.jpeg'
import { Navbar } from 'features/navbar/Navbar'
import { Project } from 'features/projectsPage/project/Project'

export type ProjectType = {
  id: number
  title: string
  description: string
  img: string
  projectLink: string
  repoLink: string
  style: {
    gridColumnStart: number
    gridColumnEnd: number | string
    gridRowStart: number
    gridRowEnd: number | string
  }
}

export const projects: ProjectType[] = [
  {
    id: 0,
    title: 'Portfolio',
    img: projectImg,
    description:
      '    Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus\n' +
      '              dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est\n' +
      '              ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci\n' +
      '              sagittis eu volutpat odio facilisis mauris sit.',
    projectLink: '',
    repoLink: '',
    style: {
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 1,
      gridRowEnd: 5,
    },
  },
  {
    id: 1,
    title: 'Tasks Manager',
    description:
      'My project for managing time building with React. Redux Toolkit was used as main state manager. In project were implemented the basic CRUD operations, filtration, interaction with backend with understanding REST-API architecture and principles, asynchronous requests using Promises in Axios library, handling errors occurring on the client or server, working with forms and validation using Formik, Yup library. Also working with complicated data structures like an associative array. Material UI was used for styling of application. ',
    img: todolistImg,
    projectLink: 'https://sergei-vorfolomeev.github.io/todolist-ts-01/',
    repoLink: 'https://github.com/Sergei-Vorfolomeev/todolist-ts-01',
    style: { gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 2, gridRowEnd: 6 },
  },

  {
    id: 2,
    title: 'Flash Cards',
    description:
      'Project development in a team with using React, Redux, Typescript, Formik, MUI, REST API, Axios. The main feature of this project was working with version control system - Git. Also for formatting and styling code were used Prettier, EsLint and StyleLint.',
    img: flashCardsImg,
    projectLink: 'https://sergei-vorfolomeev.github.io/cards-project/',
    repoLink: 'https://github.com/Sergei-Vorfolomeev/cards-project',
    style: { gridColumnStart: 3, gridColumnEnd: 'end', gridRowStart: 2, gridRowEnd: 6 },
  },

  {
    id: 3,
    title: 'Orbita',
    description:
      'My education project for the space travel company of the future with using CSS-preprocessors (SCSS), HTML-5, responsive design for all the devices.',
    img: orbitaImg,
    projectLink: 'https://sergei-vorfolomeev.github.io/orbita-project/',
    repoLink: 'https://github.com/Sergei-Vorfolomeev/orbita-project',
    style: { gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 5, gridRowEnd: 'end' },
  },

  {
    id: 4,
    title: 'Social Network',
    description:
      'My education project with using React, Redux, Typescript and so on. Part of project was written with using class components, which now are deprecated in React. But this experience helps to better understand OOP principles, SOLID principles, and just a legacy code.',
    img: socialNetworkImg,
    projectLink: 'https://sergei-vorfolomeev.github.io/new-social-network/',
    repoLink: 'https://github.com/Sergei-Vorfolomeev/new-social-network',
    style: { gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 6, gridRowEnd: 'end' },
  },

  {
    id: 5,
    title: 'Todolist on Angular',
    description: 'My education project with using Angular',
    img: todolistNgImg,
    projectLink: '',
    repoLink: 'https://github.com/Sergei-Vorfolomeev/todolist-angular',
    style: { gridColumnStart: 3, gridColumnEnd: 'end', gridRowStart: 6, gridRowEnd: 'end' },
  },
]

export const ProjectsPage = () => {
  return (
    <>
      <Navbar />
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
    </>
  )
}
