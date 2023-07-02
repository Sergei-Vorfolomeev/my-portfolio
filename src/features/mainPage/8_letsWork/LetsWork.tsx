import React from 'react'

import icon from 'common/assets/svg/icon-portfolio.svg'
import s from 'features/mainPage/8_letsWork/LetsWork.module.scss'
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
