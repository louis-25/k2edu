import React, { useState } from 'react';
import style from './Menu.module.css'

function Menu(props) {
  const [isOpen, setNav] = useState(false)  //useState의 기능은 this.state와 유사하다
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <div>
      <button type="button" className={style.logoBtn} onClick={toggleNav}>
        <i className='fas fa-align-right' />
      </button>
      <ul className={isOpen? `${style.navLinks} ${style.showNav}` : `${style.navLinks}`}>
        <li>About</li>
        <li>Location</li>
        <li>Contacts</li>
        <li>Vision</li>
      </ul>
    </div>
  );
}

export default Menu;