import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Login.module.css'

function Login({authService, popup, setPopup}) {    
  const history = useHistory()
  const id = useRef()
  const pw = useRef()
  const display = '';

  const postLogin = async(e) =>{
    e.preventDefault()
    
    console.log('id ',id.current.value)
    console.log('pw ',pw.current.value)
    authService.login(id.current.value, pw.current.value)
    .then((data)=>{
      console.log('data ',data)
      history.push({
        pathname:'/main'
      })
    })
    .catch((e)=>{
      console.log('error ',e)
    })
    
  }
  if(popup == "open") {
    display = "block"
  }else if(popup == "close") {
    display = "none"
  }
  
  return (
    <div className={style.login} style={{display:`${this.display}`}}>
      <form>
        <input type="text" name="username" ref={id} placeholder="id"/><br/>
        <input type="password" name="password" ref={pw} placeholder="pw"/><br/>
        <button type='submit' onClick={postLogin}>전송</button>
      </form>
    </div>
  );
}

export default Login;