import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? style.activeLink : style.link}>Home</NavLink>
        <NavLink to="/work" className={({ isActive }) => isActive ? style.activeLink : style.link}>Works</NavLink>
      </nav>
    </header>
  );
}

export default Header;
