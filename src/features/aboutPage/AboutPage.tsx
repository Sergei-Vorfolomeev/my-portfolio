import React from 'react'

import s from './AboutPage.module.scss'

import avatar from 'common/assets/img/AvatarCV.png'
import { Navbar } from 'features/navbar/Navbar'
import { projects } from 'features/projectsPage/ProjectsPage'

export const AboutPage = () => {
  return (
    <>
      <Navbar />
      <section className={s.mainBox}>
        <div className={s.sideBar}>
          <div className={s.photoBox}>
            <div className={s.photo}>
              <img src={avatar} alt="avatar" />
            </div>
          </div>
          <h2>Sergey Vorfolomeev</h2>
          <ul className={s.socialLinks}>
            <li>
              <a href="tel:+420777194714" className={s.circle}>
                <svg xmlns="http://www.w3.org/2000/svg" className={s.icon} viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:vorfo1897@gmail.com" className={s.circle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className={s.icon}
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/Sergei-Vorfolomeev" className={s.circle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className={s.icon}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sergey-vorfolomeev/" className={s.circle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className={s.icon}
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://t.me/divine_mushroom" className={s.circle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className={s.icon}
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className={s.content}>
          <div className={s.about}>
            <h2>About Me</h2>
            <p>
              I&apos;m a front-end developer with experience in creating SPA using React, Redux,
              TypeScript, JavaScript, CSS, HTML. Now I am improving my skills in this direction and
              expanding them with learning new technologies. Also, my strengths are great analytical
              skills, responsibility and stress resistance. Ready to consider project work and
              full-time employment.
            </p>
          </div>
          <div className={s.experience}>
            <h2>My projects as</h2>
            <div>
              <h3>Frontend developer</h3>
              <h4>Part time</h4>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h4>2022 – 2023</h4>
              {projects.map(el => (
                <div key={el.id}>
                  <a href={el.projectLink} className={s.projectTitle}>
                    {el.title}
                  </a>
                  <p>{el.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={s.education}>
            <h2>Education</h2>
            <div>
              <h3>Sertificate of Frontend Developer</h3>
              <h4>IT-Incubator</h4>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h4>2022 – 2023</h4>
            </div>
            <div>
              <h3>Upper Intermediate in Czech</h3>
              <h4>Go Study Language School</h4>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h4>2021 – 2022</h4>
            </div>
            <div>
              <h3>Specialist degree in medicine</h3>
              <h4>Saratov State Medical University</h4>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h4>2014 – 2020</h4>
            </div>
          </div>
          <div className={s.skills}>
            <h2>Skills</h2>
            <div className={s.listsBox}>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Redux Toolkit</li>
                <li>Angular</li>
                <li>Typescript</li>
                <li>REST API</li>
                <li>Javascript</li>
              </ul>
              <ul>
                <li>SCSS</li>
                <li>HTML</li>
                <li>GIT / GITHUB</li>
                <li>Unit-tests</li>
                <li>Material-UI</li>
                <li>Storybook</li>
              </ul>
            </div>
          </div>
          <div className={s.languages}>
            <h2>Languages</h2>
            <div className={s.czech}>
              <span>Czech&nbsp;</span>
              <p> - upper intermediate</p>
            </div>

            <div className={s.english}>
              <span>English&nbsp;</span>
              <p>- upper intermediate</p>
            </div>

            <div className={s.russian}>
              <span>Russian&nbsp;</span>
              <p>- advanced</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
