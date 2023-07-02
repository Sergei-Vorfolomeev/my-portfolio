import React from 'react'

import s from 'features/about-page/about-page.module.scss'

import avatar from 'common/assets/img/cv-photo-640px.png'
import { Navbar } from 'features/navbar/navbar'
import { PhoneIcon } from "common/icons/contacts-icons/phone-icon";
import { MailIcon } from "common/icons/contacts-icons/mail-icon";
import { GitHubIcon } from "common/icons/contacts-icons/git-hub-icon";
import { LinkedInIcon } from "common/icons/contacts-icons/linked-in-icon";
import { TelegramIcon } from "common/icons/contacts-icons/telegram-icon";
import { projects } from "features/projects-page/project/projects-store";

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
            <li><PhoneIcon circleStyle={s.circle} iconStyle={s.icon}/></li>
            <li><MailIcon circleStyle={s.circle} iconStyle={s.icon}/></li>
            <li><GitHubIcon circleStyle={s.circle} iconStyle={s.icon}/></li>
            <li><LinkedInIcon circleStyle={s.circle} iconStyle={s.icon}/></li>
            <li><TelegramIcon circleStyle={s.circle} iconStyle={s.icon}/></li>
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
          <div className={s.skills}>
            <h2>Skills</h2>
            <div className={s.listsBox}>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Redux Toolkit</li>
                <li>Next JS</li>
                <li>Angular</li>
                <li>Typescript</li>
                <li>REST API</li>
                <li>Javascript</li>
              </ul>
              <ul>
                <li>SCSS</li>
                <li>HTML</li>
                <li>Node JS</li>
                <li>Express</li>
                <li>GIT / GITHUB</li>
                <li>Unit-tests</li>
                <li>Material-UI</li>
                <li>Storybook</li>
              </ul>
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
