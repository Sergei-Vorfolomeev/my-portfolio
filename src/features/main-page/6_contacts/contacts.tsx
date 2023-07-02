import React from "react";
import s from "features/main-page/6_contacts/contacts.module.scss";
import { CommonIcon } from "common/icons/common-icon/common-icon";
import { ContactsIcon } from "common/icons/contacts-icons/contacts-icon";
import { PhoneIcon } from "common/icons/contacts-icons/phone-icon";
import { MailIcon } from "common/icons/contacts-icons/mail-icon";
import { GitHubIcon } from "common/icons/contacts-icons/git-hub-icon";
import { LinkedInIcon } from "common/icons/contacts-icons/linked-in-icon";
import { TelegramIcon } from "common/icons/contacts-icons/telegram-icon";

export const Contacts = () => {
  return (
    <div className={s.flipBox}>
      <div className={s.flipCard}>
        <div className={s.front}>
          <div className={s.iconBox}>
            <ContactsIcon />
          </div>
          <div className={s.descriptionBox}>
            <div className={s.description}>
              <h4>Get in touch</h4>
              <h1>Contacts</h1>
            </div>
            <CommonIcon />
          </div>
        </div>
        <div className={s.back}>
          <ul className={s.socialLinks}>
            <li><PhoneIcon circleStyle={s.circlePhone} iconStyle={s.icon}/></li>
            <li><MailIcon circleStyle={s.circleMail} iconStyle={s.icon}/></li>
            <li><GitHubIcon circleStyle={s.circleGitHub} iconStyle={s.icon}/></li>
            <li><LinkedInIcon circleStyle={s.circleLinkedIn} iconStyle={s.icon}/></li>
            <li><TelegramIcon circleStyle={s.circleTelegram} iconStyle={s.icon}/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
