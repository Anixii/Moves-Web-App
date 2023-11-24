import React, { useEffect, useRef } from "react";
import  "./Header.css";
import { Link, NavLink } from "react-router-dom"; 
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
    <header ref={headerRef} className={'header'}>
      <div className={`header__wrap container`}>
        <div className={'logo'}>
          <img src={logo} alt="Logo" />
          <Link to={"/"}>tMovies</Link>
        </div>
        <ul className={'header__nav'}>
          {headerNav.map((item, index) => (
            <li key={index}>
              <NavLink activeClassName={'active'} className={'header__link'} to={item.path}>
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
