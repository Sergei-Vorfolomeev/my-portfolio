import React from "react";

import s from "features/projects-page/projects-page.module.scss";
import { Navbar } from "features/navbar/navbar";
import { Project } from "features/projects-page/project/project";
import { projects } from "features/projects-page/project/projects-store";

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
