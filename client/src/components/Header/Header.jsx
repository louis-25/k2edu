import React, { useState } from 'react';
import style from './Header.module.css'
import Login from './Login/Login'

function Header({ authService, loginState }) {
  const [popup, setPopup] = useState('close')

  const Logout = () => {
    authService.logout();
  }

  const loginPopup = () => {
    setPopup('open')
    console.log(popup)
    return <Login
              authService={authService}
              popup={popup}
              setPopup={setPopup}>
          </Login>
  }

  function loginBox() {
    switch (loginState) {
      case "guest":
        return <button onClick={loginPopup}>Login</button>
      case "member":
        return <>
        <h1>~~님 환영합니다</h1>
        <button onClick={Logout}>Logout</button>
        </>
    }
  }  

  return (
    <div className={style.header}>
      <h1>Header!!</h1>
      {loginBox()}
    </div>
  );
}

export default Header;