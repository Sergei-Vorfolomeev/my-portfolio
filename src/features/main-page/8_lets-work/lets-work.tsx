import React from 'react'
import s from 'features/main-page/8_lets-work/lets-work.module.scss'
import { CommonIcon } from "common/icons/common-icon/common-icon";

export const LetsWork = () => {
  return (
    <div className={s.flipBox}>
      <div className={s.descriptionIconBox}>
        <div className={s.description}>
          <h1>
            Let&apos;s
            <br />
            work <span>together</span>
          </h1>
        </div>
        <CommonIcon />
      </div>
    </div>
  )
}
