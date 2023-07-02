import React from 'react'
import s from 'features/mainPage/5_skills/Skills.module.scss'
import { ReactIcon } from "common/icons/react-icon/react-icon";
import { ReduxIcon } from "common/icons/redux-icon/redux-icon";
import { AngularIcon } from "common/icons/angular-icon/angular-icon";
import { TypescriptIcon } from "common/icons/typescript-icon/typescript-icon";
import { CommonIcon } from "common/icons/common-icon/common-icon";

export const Skills = () => {
  return (
    <div className={s.flipBox}>
      <div className={s.flipCard}>
        <div className={s.front}>
          <div className={s.descriptionIconBox}>
            <div className={s.iconsBox}>
             <ReactIcon />
             <ReduxIcon />
             <AngularIcon />
             <TypescriptIcon />
            </div>
            <div className={s.description}>
              <h4>Abilities</h4>
              <h1>Skills</h1>
            </div>
            <CommonIcon />
          </div>
        </div>
        <div className={s.back}>
          <div className={s.content}>
            <h1>Skills</h1>
            <div className={s.lists}>
              <div className={s.firstList}>
                <p className={s.react}>React</p>
                <p className={s.redux}>Redux</p>
                <p className={s.rtk}>Redux Toolkit</p>
                <p className={s.angular}>Angular</p>
                <p className={s.typescript}>Typescript</p>
                <p className={s.restAPI}>REST API</p>
                <p className={s.javascript}>Javascript</p>
                <p className={s.git}>Git / GitHub</p>
                <p className={s.sass}>SASS / SCSS / Tailwind</p>
                <p className={s.html}>HTML</p>
                <p className={s.mui}>Material-UI</p>
                <p className={s.unitTests}>Node-JS</p>
                <p className={s.storybook}>NEXT.JS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
