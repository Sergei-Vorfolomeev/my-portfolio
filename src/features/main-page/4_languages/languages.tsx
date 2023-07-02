import React from 'react'
import s from 'features/main-page/4_languages/languages.module.scss'
import { CommonIcon } from "common/icons/common-icon/common-icon";
import { LanguageIcon } from "common/icons/language-icon/language-icon";

export const Languages = () => {
  return (
    <div className={s.flipBox}>
      <div className={s.flipCard}>
        <div className={s.front}>
          <div className={s.iconBox}>
            <LanguageIcon />
          </div>
          <div className={s.descriptionBox}>
            <div className={s.description}>
              <h4>Abilities</h4>
              <h1>Languages</h1>
            </div>
            <CommonIcon />
          </div>
        </div>
        <div className={s.back}>
          <div>
            <h1>Languages</h1>
          </div>
          <div>
            <div className={s.czech}>
              <span>Czech</span>
              <p>upper intermediate</p>
            </div>
            <div className={s.english}>
              <span>English</span>
              <p>upper intermediate</p>
            </div>
            <div className={s.russian}>
              <span>Russian</span>
              <p>advanced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
