import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Header.module.css'
import Login from './Login/Login'
import logo from '../../images/fasoo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import classnames from 'classnames'
import Menu from './Menu'

function Header({ authService, loginState, setLogin }) {
  const history = useHistory()
  const [popup, setPopup] = useState(false)     
  const [ham, setHam] = useState(false)
  const [dropdown, setDropdown] = useState(false)  
  const [toggle, setToggle] = useState(false)
  const [width, setWidth] = useState(0)
  const bars = useRef()
  const drawerIcon = useRef()
  const drawer = useRef()    

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
    // drawer.current.focus();
    // navbar.current.focus();
    setHam(!ham)
    console.log('ham ', ham)    
    if(drawer.current.style.width=='250px') {
      drawer.current.style.width='0px'  
    }else {
      drawer.current.style.width='250px'
    }

    if(drawerIcon.current.style.right=='235px') {
      drawerIcon.current.style.right='0px'  
    }else {
      drawerIcon.current.style.right='235px'
    }
    // if(navbar.current.style.height=='280px') {
    //   navbar.current.style.height='76px'  
    // }else {
    //   navbar.current.style.height='280px'
    // }
  }
  
  function goToSubMenu(submenu){
    history.push(submenu)
    if(window.innerWidth < 768) {
      openBar()
    }
  }  
  
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  
  const [windowSize, setWindowSize] = useState(getSize);
  
  
  useEffect(()=>{ 
    function handleResize() {
      setWindowSize(getSize());
      console.log('width ',windowSize.width)
    } 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[])
  return (
    <header>      
      <div className={style.drawer} ref={drawer} onMouseLeave={onMouseLeaveHandler}>        
        {headerMenu()}
        {/* <Menu></Menu> */}
      </div>
      <nav className={style.navbar} >
        {/* <div className={style.content}> */}
        <div className={style.logo}>
          <a href="/"><img src={logo} alt="logo"/></a>
        </div>
        <div className={style.menu} onMouseLeave={onMouseLeaveHandler}>
          {headerMenu()}
        </div>        
        <i 
          onClick={openBar}
          ref={drawerIcon}
          className={classnames(
            ham ? 'fas fa-times' : 'fas fa-bars' ,
            ham ? style.toggle_btn : style.toggle_btn, 
            style.drawerIcon)
          }
        />        
      </nav>
    </header>
  );

  function headerMenu() {
    return (
      <ul className={ham ? style.menu_open : style.menu_close}>                    
          <li className={style.menu__item} onClick={()=>goToSubMenu('/')}>Home</li>
          <li>
            <div className={style.menu__item} onClick={()=>goToSubMenu('/about')} onMouseEnter={()=>onMouseEnterHandler('about')}>
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
          <li className={style.menu__item} onClick={()=>goToSubMenu('/contact')}>
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
                openBar={openBar}
                >
            </Login>
            </div>
          }
      </ul>
    )
  }
}

export default Header;