import React, { useEffect, useRef } from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom"; 
import logo from '../assets/img/tmovie.png'
const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];
const Header = () => { 
  const headerRef = useRef(null) 
  useEffect(() => {
    const shrinkHeader = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            headerRef.current.classList.add('shrink');
        } else {
            headerRef.current.classList.remove('shrink');
        }
    }
    window.addEventListener('scroll', shrinkHeader);
    return () => {
        window.removeEventListener('scroll', shrinkHeader);
    };
}, []);
  return (
    <header ref={headerRef} className={s.header}>
      <div className={`${s.header__wrap} ${s.container}`}>
        <div className={s.logo}>
          <img src={logo} alt="Logo" />
          <NavLink to={"/"}>tMovies</NavLink>
        </div>
        <ul className={s.header__nav}>
          {headerNav.map((item, index) => (
            <li key={index}>
              <NavLink activeClassName={s.active} className={s.header__link} to={item.path}>
                {item.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
