import React, { useMemo, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Login.module.css'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import classnames from 'classnames'
import parser from 'postcss-selector-parser';
import postcss from 'postcss'

function Login({authService, popup, setPopup, setLogin, openBar}) {    
  const history = useHistory()
  const id = useRef()
  const pw = useRef()    
  // const processor = parser();

  // function authTest() {
  //   return authService.me()
  // }

  const postLogin = (e) =>{
    e.preventDefault()    
    // console.log('id ',id.current.value)
    // console.log('pw ',pw.current.value)
    authService.login(id.current.value, pw.current.value)
    .then((data)=>{ // login 성공
      console.log('data ',data)
      setPopup(false)
      // setLogin('member')
      window.location.replace("/")      
    })
    .catch((e)=>{ // login 실패
      console.log('error ',e)
      id.current.value = ""
      pw.current.value = ""
      alert(e)
      
    })
    
  }
  
  const closeLogin = () =>{    
    setPopup(false)     
    // openBar()
  }

  const Register = () => {    
    setPopup(false)
    if(window.innerWidth < 768) {
      openBar()
    }
    history.push('/register');
  }

  return (
    <div>
    {popup && <div onClick={()=>setPopup(!popup)} className={style.popup_overlay}></div>}
    <div className={classnames(style.login, style.form)}>
    {/* <form className={style.form}> */}
      <div className={style.title}>
        <b>로그인창</b>
      <FontAwesomeIcon onClick={closeLogin} icon={faTimes} className={classnames(style.xbox,"align-self-center")}/>
      </div>
      
      <input className={style.input} type="text" name="id" ref={id} placeholder="아이디"/>
      <input className={style.input} type="password" name="password" ref={pw} placeholder="비밀번호"/>      
      <ul>
        <li><Button type='submit' onClick={postLogin} className={style.Btn}>로그인</Button></li>
        <li><button type='submit' onClick={Register} className={classnames(style.Btn, style.register)}>회원가입</button></li>        
      </ul>
      {/* </form> */}
    </div>
    </div>
  );
}

export default Login;