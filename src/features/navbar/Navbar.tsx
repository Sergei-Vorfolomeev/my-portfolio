import React from 'react'

import { NavLink } from 'react-router-dom'

import s from 'features/navbar/Navbar.module.scss'

export const Navbar = () => {
  return (
    <nav className={s.header}>
      <ul className={s.menu}>
        <li className="active">
          <NavLink to={'/'} className={({ isActive }) => (isActive ? s.active : s.item)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/about'} className={({ isActive }) => (isActive ? s.active : s.item)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={'/projects'} className={({ isActive }) => (isActive ? s.active : s.item)}>
            Works
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
