import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Login.module.css'
import {Button} from 'react-bootstrap'

function Login({authService, popup, setPopup}) {    
  const history = useHistory()
  const id = useRef()
  const pw = useRef()  

  const postLogin = async(e) =>{
    e.preventDefault()    
    // console.log('id ',id.current.value)
    // console.log('pw ',pw.current.value)
    authService.login(id.current.value, pw.current.value)
    .then((data)=>{ // login 성공
      console.log('data ',data)
      setPopup(false)
      window.location.replace("/")
    })
    .catch((e)=>{ // login 실패
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
        <li><Button type='submit' onClick={postLogin} className={style.loginBtn}>로그인</Button></li>
        <li><a href="/register">회원가입</a></li>
        <li><Button onClick={closeLogin}>닫기</Button></li>
      </ul>
      </form>
    </div>
  );
}

export default Login;