import React from 'react'

import { useNavigate } from 'react-router-dom'

import icon from 'common/assets/svg/icon-portfolio.svg'
import s from 'features/5_skills/Skills.module.scss'

export const Skills = () => {
  const navigate = useNavigate()

  return (
    <div className={s.flipBox}>
      <div className={s.flipCard}>
        <div className={s.front}>
          <div className={s.descriptionIconBox}>
            <div className={s.iconsBox}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                id="IconChangeColor"
                height="200"
                width="200"
                className={s.iconReact}
              >
                <path
                  d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
                  id="mainIconPathAttribute"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={s.iconRedux}
              >
                <path d="M 11.5 2 C 8.416 2 6 5.5822969 6 10.154297 C 6 12.224297 6.5020781 14.081906 7.3300781 15.503906 C 7.2830781 15.662906 7.25 15.826 7.25 16 C 7.25 16.966 8.034 17.75 9 17.75 C 9.966 17.75 10.75 16.966 10.75 16 C 10.75 15.034 9.966 14.25 9 14.25 C 8.976 14.25 8.9536875 14.256813 8.9296875 14.257812 C 8.3596875 13.159813 8 11.719297 8 10.154297 C 8 6.8182969 9.603 4 11.5 4 C 12.662 4 13.711563 5.0585313 14.351562 6.6445312 C 14.481563 6.9655312 14.752797 7.2014375 15.091797 7.2734375 C 15.100797 7.2754375 15.108188 7.2763437 15.117188 7.2773438 C 15.878187 7.4423438 16.523375 6.6751719 16.234375 5.9511719 C 15.285375 3.5671719 13.54 2 11.5 2 z M 11.375 8.5 C 10.409 8.5 9.625 9.284 9.625 10.25 C 9.625 11.216 10.409 12 11.375 12 C 12.062 12 12.6505 11.601391 12.9375 11.025391 C 14.2305 11.083391 15.669344 11.458359 17.027344 12.193359 C 18.987344 13.255359 20.465813 14.885219 20.882812 16.449219 C 21.097812 17.252219 21.021156 17.957922 20.660156 18.544922 C 19.998156 19.621922 18.486703 20.103516 16.720703 19.978516 C 16.434703 19.958516 16.157219 20.051047 15.949219 20.248047 C 15.943219 20.254047 15.937641 20.259625 15.931641 20.265625 C 15.315641 20.844625 15.652141 21.907516 16.494141 21.978516 C 16.744141 21.998516 16.990375 22 17.234375 22 C 19.468375 22 21.383281 21.184797 22.363281 19.591797 C 23.016281 18.532797 23.171453 17.268594 22.814453 15.933594 C 22.250453 13.826594 20.441516 11.769547 17.978516 10.435547 C 16.179516 9.4605469 14.307281 9.0066719 12.613281 9.0136719 C 12.296281 8.6956719 11.859 8.5 11.375 8.5 z M 3.4238281 12.769531 C 3.1634023 12.776 2.9033906 12.884906 2.7128906 13.113281 C 1.9768906 13.997281 1.4475 14.959594 1.1875 15.933594 C 0.8305 17.268594 0.98471875 18.533797 1.6367188 19.591797 C 2.6157188 21.184797 4.530625 22 6.765625 22 C 8.457625 22 10.333 21.536453 12.125 20.564453 C 13.835 19.638453 15.216656 18.362844 16.097656 16.964844 C 16.897656 16.803844 17.5 16.097 17.5 15.25 C 17.5 14.284 16.716 13.5 15.75 13.5 C 14.784 13.5 14 14.284 14 15.25 C 14 15.576 14.095953 15.878625 14.251953 16.140625 C 13.544953 17.155625 12.468828 18.105641 11.173828 18.806641 C 8.0548281 20.495641 4.4658438 20.374969 3.3398438 18.542969 C 2.9788438 17.955969 2.9041406 17.252219 3.1191406 16.449219 C 3.3001406 15.773219 3.6828437 15.084547 4.2148438 14.435547 C 4.4228438 14.181547 4.502875 13.855109 4.421875 13.537109 C 4.419875 13.529109 4.4160625 13.520672 4.4140625 13.513672 C 4.2928125 13.033047 3.8578711 12.75875 3.4238281 12.769531 z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className={s.iconAngular}
              >
                <path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z" />
              </svg>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={s.iconTS}
              >
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
              </svg>
            </div>
            <div className={s.description}>
              <h4>Abilities</h4>
              <h1>Skills</h1>
            </div>
            <img src={icon} alt="icon" onClick={() => navigate('/2_about')} className={s.icon} />
          </div>
        </div>
        <div className={s.back}></div>
      </div>
    </div>
  )
}