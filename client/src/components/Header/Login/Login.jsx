import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Login.module.css'

function Login({authService, popup, setPopup}) {    
  const history = useHistory()
  const id = useRef()
  const pw = useRef()  

  const postLogin = async(e) =>{
    e.preventDefault()    
    // console.log('id ',id.current.value)
    // console.log('pw ',pw.current.value)
    authService.login(id.current.value, pw.current.value)
    .then((data)=>{
      console.log('data ',data)
      setPopup(false)
    })
    .catch((e)=>{
      id.current.value = ""
      pw.current.value = ""
      alert(e)
      // console.log('error ',e)
    })
    
  }    
  
  const closeLogin = () =>{
    setPopup(false)
  }

  return (
    <div className={style.login}>
      <div>로그인창</div>
      <form className={style.form}>      
      <input type="text" name="id" ref={id} placeholder="id"/>
      <input type="password" name="password" ref={pw} placeholder="password"/>
      <ul>        
        <li><button type='submit' onClick={postLogin} className={style.loginBtn}>로그인</button></li>
        <li><a href="/register">회원가입</a></li>
        <li><button onClick={closeLogin}>닫기</button></li>
      </ul>
      </form>
    </div>
  );
}

export default Login;