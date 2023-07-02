import React from 'react'

import avatar from 'common/assets/img/AvatarCV.png'
import icon from 'common/assets/svg/icon-portfolio.svg'
import s from 'features/mainPage/1_profile/Profile.module.scss'
import { CommonIcon } from "common/icons/common-icon/common-icon";

export const Profile = () => {
  return (
    <div className={s.box}>
      <div className={s.photoBox}>
        <div className={s.photo}>
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      <div className={s.description}>
        <h4>Frontend developer</h4>
        <h1>Sergey Vorfolomeev</h1>
        <p>I am a Frontend Developer based in Prague</p>
        <CommonIcon />
      </div>
    </div>
  )
}
