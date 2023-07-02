import s from "./common-icon.module.scss";
import React from "react";
import icon from "common/assets/svg/icon-portfolio.svg";

export const CommonIcon = () => {
  return (
    <img src={icon} alt="icon" className={s.icon} />
  )
}