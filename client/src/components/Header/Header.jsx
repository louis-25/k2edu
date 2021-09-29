import React, { useEffect, useState, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import style from './Header.module.css'
import Login from './Login/Login'
import logo from '../../images/fasoo.png'
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import classnames from 'classnames'
import parser from 'postcss-selector-parser'
import * as postcss from 'postcss'

function Header({ authService, loginState, setLogin }) {
  const history = useHistory()
  const [popup, setPopup] = useState(false)
  const [show, setShow] = useState(false) // Navbar hover 파악용    
  const [ham, setHam] = useState(false)
  const [hover, setHover] = useState(false)
  const bars = useRef()
  const navbar = useRef()

  const showDropdown = (e)=>{
    console.log('e ',e);
      setShow(!show);
  }
  const hideDropdown = (e) => {
      setShow(false);
  }

  const Logout = (e) => {    
    authService.logout();    
    setLogin('guest')
    window.location.replace("/")
  }

  const openLogin = (e) => {
    console.log('login!!!')    
    setPopup(true)    
  }

  const onMouseEnterHandler = (e) => {
    setHover(true)
    console.log(e)
    console.log('mouse enter')
  }

  const onMouseLeaveHandler = (e) => {
    setHover(false)
    console.log(e)
    console.log('mouse leave')
  }

  function loginBox() {
    switch (loginState) {
      case "member":
        return <Nav.Link onClick={openLogin}>Login</Nav.Link>
      case "guest":
        return <>
          <div className={style.member}>
            <span className={style.member_menu} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>{authService.tokenStorage.getId()}님 환영합니다</span>
            {hover && <span onClick={Logout}>Logout</span>}
          </div>
        </>
    }
  }

  const openBar = () => {
    // const test = parser.className({value:'.toggle_btn'})    
    // bars.current.style.transition = `opacity .3s`
    setHam(!ham)
    console.log('ham ', ham)
    // console.log(bars)
    if(navbar.current.style.height=='280px') {
      navbar.current.style.height='76px'  
    }else {
      navbar.current.style.height='280px'
    }
  }

  // function hoverMenu() {
  //   return (
      
  //   )
  // }

  return (
    <>
    <header>      
      <nav className={style.navbar} ref={navbar}>
        <div className={style.content}>
        <div className={style.logo}>
          <a href="/"><img src={logo} alt="logo"/></a>
        </div>
        <div className={style.menu}>
            <ul className={ham ? style.menu_open : style.menu_close}>                    
                <li className={style.menu__item} onClick={()=>history.push('/')}>Home</li>
                <li className={style.menu__item} onClick={()=>history.push('/about')}>About</li>                
                <li className={style.menu__item} onClick={()=>history.push('/course')}>
                    Courses
                </li>                    
                <li className={style.menu__item} onClick={()=>history.push('/contact')}>
                    Contact
                </li>       
                <li>
                {loginBox()}
                {
                  <div className={popup ? style.login_action : style.login_hidden}>
                  <Login
                      authService={authService}
                      popup={popup}
                      setPopup={setPopup}
                      setLogin={setLogin}
                      >
                  </Login>
                  </div>
                }   
                </li>      
            </ul>
            
        </div>      
          <FontAwesomeIcon icon={ham ? faTimes : faBars} className={popup ? style.toggle_hide : style.toggle_btn} onClick={openBar}/>          
        </div>
      </nav>           
    </header>    
    {/* {hover && <div className={style.hover_menu}>hello</div>} */}
    </>
  );
}

export default Header;