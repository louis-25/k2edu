import React, { useEffect, useState } from 'react';
import style from './Header.module.css'
import Login from './Login/Login'
import logo from '../../images/fasoo.png'
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap'

function Header({ authService, loginState }) {
  const [popup, setPopup] = useState(false)

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
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" alt="logo"><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="메뉴" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            {loginBox()}
            {
              popup && (<Login
                  authService={authService}
                  popup={popup}
                  setPopup={setPopup}>
              </Login>)
            }      
          </Nav>          
        </Navbar.Collapse>
      </Navbar>
      {/* <div className={style.header}>      
      <a href="/" alt="logo" >
        <img src={logo} alt="logo" />
      </a>      

      {loginBox()}      
      {
          popup && (<Login
              authService={authService}
              popup={popup}
              setPopup={setPopup}>
          </Login>)
      }      
      </div> */}
    </>
  );
}

export default Header;