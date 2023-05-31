import React from 'react'

import s from './ProjectsPage.module.scss'

import { Project } from 'features/projectsPage/project/Project'

export const ProjectsPage = () => {
  const project1Style = {
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 5,
  }
  const project2Style = {
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 2,
    gridRowEnd: 6,
  }
  const project3Style = {
    gridColumnStart: 3,
    gridColumnEnd: 4,
    gridRowStart: 2,
    gridRowEnd: 6,
  }
  const project4Style = {
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 5,
    gridRowEnd: 'end',
  }
  const project5Style = {
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 6,
    gridRowEnd: 'end',
  }
  const project6Style = {
    gridColumnStart: 3,
    gridColumnEnd: 4,
    gridRowStart: 6,
    gridRowEnd: 'end',
  }

  return (
    <section className={s.mainBox}>
      <div className={s.gridBox}>
        <div className={s.titleBox}>
          <h1>Projects</h1>
        </div>
        <Project style={project1Style} />
        <Project style={project2Style} />
        <Project style={project3Style} />
        <Project style={project4Style} />
        <Project style={project5Style} />
        <Project style={project6Style} />
      </div>
    </section>
  )
}
