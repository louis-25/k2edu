import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Login.module.css'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import classnames from 'classnames'
import parser from 'postcss-selector-parser';
import postcss from 'postcss'

function Login({authService, popup, setPopup}) {    
  const history = useHistory()
  const id = useRef()
  const pw = useRef()    
  const processor = parser();

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

  const Register = () => {    
    setPopup(false)
    history.push('/register');
  }

  return (
    <div>
    {popup && <div className={style.popup_overlay}></div>}
    <div className={style.login}>            
    <form className={style.form}>
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
      </form>
    </div>
    </div>
  );
}

export default Login;