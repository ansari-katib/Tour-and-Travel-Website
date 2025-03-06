import React from 'react'
import "./Navbar.css";
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navebar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
     }
  return (
    <>
      <nav className='NavebarItems'>
        <h1 className='navbar-logo'><b>Travel</b></h1>

        <div className='menu-icon' onClick={handleClick} >     
          <i className={clicked ? "ri-close-fill" : "ri-menu-line"}></i>
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>{item.title}
                  </Link>
                </li>
            )
          })}
          <button className='button'>sign up</button>

        </ul>
      </nav>
    </>
  )
}

export default Navebar


