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
  const [ham, setHam] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [menuHover, setMenuHover] = useState(false)
  const [toggle, setToggle] = useState(false)
  const bars = useRef()
  const navbar = useRef()  

  const Logout = (e) => {    
    authService.logout();    
    setLogin('guest')
    window.location.replace("/")
  }

  const openLogin = (e) => {
    console.log('login!!!')    
    setPopup(true)    
  }

  function onMouseEnterHandler(menu) {
    setDropdown(menu)
    console.log('menu ', menu)
  }

  const onMouseLeaveHandler = (e) => {
    setDropdown(false)
    console.log(e)
    console.log('mouse leave')
  }

  function loginBox() {
    switch (loginState) {
      case "guest":
        return <li className={style.menu__item} onClick={openLogin}>Login</li>
      case "member":
        return <>
          <div className={style.menu__item}>
            <span onClick={()=>setToggle(!toggle)} className={style.member_menu}>{authService.tokenStorage.getId()}님 환영합니다
            {toggle && <div onClick={Logout}>Logout</div>}
            </span>
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

  function goToSubMenu(submenu){
    history.push(submenu)
  }

  return (
    <header>
      <nav className={style.navbar} ref={navbar}>
        {/* <div className={style.content}> */}
        <div className={style.logo}>
          <a href="/"><img src={logo} alt="logo"/></a>
        </div>
        <div className={style.menu} onMouseLeave={onMouseLeaveHandler}>
            <ul className={ham ? style.menu_open : style.menu_close}>                    
                <li className={style.menu__item} onClick={()=>history.push('/')}>Home</li>
                <li>
                  <div className={style.menu__item} onClick={()=>history.push('/about')} onMouseEnter={()=>onMouseEnterHandler('about')}>
                    About <i className='fas fa-caret-down' />                 
                  </div>                    
                  <div className={dropdown=='about' ? style.hover_menu_open : style.hover_menu_hide}>
                    <div onClick={(e)=>{e.stopPropagation(); goToSubMenu('/about1')}} className={classnames(style.sub__item)}>about1</div>
                    <div onClick={(e)=>{e.stopPropagation(); goToSubMenu('/about2')}} className={classnames(style.sub__item)}>about2</div>
                  </div>
                </li>
                <li>
                  <div className={style.menu__item} onClick={(e)=>{history.push('/course')}} onMouseEnter={()=>onMouseEnterHandler('course')}>
                      Courses <i className='fas fa-caret-down' />
                  </div>
                    <div className={dropdown=='course' ? style.hover_menu_open : style.hover_menu_hide}>
                    <div onClick={(e)=>{e.stopPropagation(); goToSubMenu('/course1')}} className={classnames(style.sub__item)}>course1</div>
                  </div>
                </li>
                <li className={style.menu__item} onClick={()=>history.push('/contact')}>
                    Contact
                </li>
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
            </ul>
        </div>
          <FontAwesomeIcon icon={ham ? faTimes : faBars} className={popup ? style.toggle_hide : style.toggle_btn} onClick={openBar}/>
        {/* </div> */}
      </nav>
    </header>
  );
}

export default Header;