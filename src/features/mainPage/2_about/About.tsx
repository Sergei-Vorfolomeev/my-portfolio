import React from 'react'

import { useNavigate } from 'react-router-dom'

import signature from 'common/assets/img/signature.png'
import icon from 'common/assets/svg/icon-portfolio.svg'
import s from 'features/mainPage/2_about/About.module.scss'
import { CommonIcon } from "common/icons/common-icon/common-icon";

export const About = () => {
  const navigate = useNavigate()

  return (
    <div
      className={s.box}
      onClick={() => {
        navigate('/about')
      }}
    >
      <div  className={s.signatureBox}>
        <img src={signature} alt="signature" />
      </div>
      <div className={s.descriptionIconBox}>
        <div className={s.description}>
          <h4>More about me</h4>
          <h1>Profile</h1>
        </div>
        <CommonIcon />
      </div>
    </div>
  )
}
