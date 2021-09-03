import React, { useEffect, useState } from 'react';
import style from './Header.module.css'
import Login from './Login/Login'
import logo from '../../images/fasoo.png'

function Header({ authService, loginState }) {
  const [popup, setPopup] = useState(false)

  const Logout = () => {
    authService.logout();
    window.location.replace("/")
  }

  const openLogin = () => {  
    setPopup(true)      
  }

  function loginBox() {        
    switch (loginState) {
      case "guest":
        return <button onClick={openLogin}>Login</button>
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
    <div className={style.header}>      
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
      </div>
    </>
  );
}

export default Header;