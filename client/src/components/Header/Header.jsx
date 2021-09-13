import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import style from './Header.module.css'
import Login from './Login/Login'
import logo from '../../images/fasoo.png'
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import classnames from 'classnames'
import parser from 'postcss-selector-parser'
import * as postcss from 'postcss'

function Header({ authService, loginState }) {
  const history = useHistory()
  const [popup, setPopup] = useState(false)
  const [show, setShow] = useState(false) // Navbar hover 파악용    

  const showDropdown = (e)=>{
    console.log('e ',e);
      setShow(!show);
  }
  const hideDropdown = (e) => {
      setShow(false);
  }

  const Logout = (e) => {    
    authService.logout();
    window.location.replace("/")
  }

  const openLogin = (e) => {
    console.log('login!!!')    
    setPopup(true)    
  }

  function loginBox() {
    switch (loginState) {
      case "guest":
        return <Nav.Link onClick={openLogin}>Login</Nav.Link>
      case "member":
        return <>
          <h1>{authService.tokenStorage.getId()}님 환영합니다</h1>
          <button onClick={Logout}>Logout</button>
        </>
    }
  }

  // useEffect(()=>{
  //   window.location.replace("/")
  // },[loginState])

  return (
    <header>      
      <nav className={style.navbar}>
        <div className={style.content}>
        <div className={style.logo}>
          <a href="/"><img src={logo} alt="logo"/></a>
        </div>
        <div className={style.menu}>
            <ul className={classnames(style.menu, style.open)}>                    
                <li className={style.menu__item} onClick={()=>history.push('/')}>Home</li>
                <li className={style.menu__item} onClick={()=>history.push('/about')}>About</li>                
                <li className={style.menu__item} onClick={()=>history.push('/course')}>
                    Courses
                </li>                    
                <li className={style.menu__item} onClick={()=>history.push('/contact')}>
                    Contact
                </li>                
            </ul>
            {loginBox()}
            {
              <div className={popup ? style.login_action : style.login_hidden}>
              <Login
                  authService={authService}
                  popup={popup}
                  setPopup={setPopup}>
              </Login>
              </div>
            }
        </div>            
        <button className={style.toggle_btn}>
          <FontAwesomeIcon className="align-self-center" icon={faBars}/>
        </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;