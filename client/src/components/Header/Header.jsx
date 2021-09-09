import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Header.module.css'
import Login from './Login/Login'
import logo from '../../images/fasoo.png'
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import classnames from 'classnames'

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
    <>
      {/* <Navbar bg="light" expand="lg" className={style.header}>
        <Navbar.Brand href="/" alt="logo"><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <NavDropdown className={style.drop} show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown} title="교육과정" id="basic-nav-dropdown"> */}
            {/* <NavDropdown title="교육과정" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <NavDropdown title="메뉴" id="basic-nav-dropdown">
              <NavDropdown.Item href="/course">Course</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            {loginBox()}
            {
              popup && (<Login
                  authService={authService}
                  popup={popup}
                  setPopup={setPopup}>
              </Login>)
            }
            <FontAwesomeIcon className="align-self-center" icon={faShoppingCart}/>
            </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <nav className={style.navbar}>
        <div className={style.logo}>
          <a href="/"><img src={logo} alt="logo"/></a>
        </div>
        <div className={style.menu}>
            <ul className={classnames(style.menu, style.open)}>                    
                <li className={style.menu__item} href="/">Home</li>
                <li className={style.menu__item} >About</li>                
                <li className={style.menu__item} >
                    Courses
                </li>                    
                <li className={style.menu__item} >
                    Contact
                </li>
                <li className={style.menu__item} >
                    Login
                </li>
            </ul>
        </div>            
        <button className={style.toggle_btn}>
          <FontAwesomeIcon className="align-self-center" icon={faBars}/>
        </button>
      </nav>
    </>
  );
}

export default Header;