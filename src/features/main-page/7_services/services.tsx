import React from 'react'

import { useNavigate } from 'react-router-dom'

import icon from 'common/assets/svg/icon-portfolio.svg'
import s from 'features/main-page/7_services/services.module.scss'
import { CommonIcon } from "common/icons/common-icon/common-icon";

export const Services = () => {
  const navigate = useNavigate()

  return (
    <div className={s.flipBox}>
      <div className={s.descriptionIconBox}>
        <div className={s.description}>
          {/*<h4>My abilities</h4>*/}
          <h1>Services</h1>
        </div>
        <CommonIcon />
      </div>
    </div>
  )
}
