import React, { useRef } from 'react';
import style from './Register.module.css'
import Title from '../Title/Title'

function Register(props) {
  const id = useRef();
  const email = useRef();
  const passowrd = useRef();
  const passwordRe = useRef();
  const name = useRef();
  const title = "회원가입"
  const description = "회원가입 페이지입니다"
  const breadscrumbs = [
    {
      title:"홈",
      href:"/",
      next:"/"
    },
    {
      title:"회원가입",
      href:undefined,
      next:""
    }
  ]

  return (
    <>
    <Title title={title} description={description} breadscrumbs={breadscrumbs}></Title>
    <div className={style.inputBox}>      
      <div className={style.inputField}>
        <span>아이디</span>
        <input className={style.input} type="text" name="id" ref={id}/>
      </div>
      <div className={style.inputField}>
        <span>이메일 주소</span>
        <input className={style.input} type="email" name="email" ref={email}/>
      </div>
      <div className={style.inputField}>
        <span>비밀번호 입력</span>
        <input className={style.input} type="password" name="password" ref={passowrd}/>
      </div>
      <div className={style.inputField}>
        <span>비밀번호 재입력</span>
        <input className={style.input} type="password" name="passwordRe" ref={passwordRe}/>
      </div>
      <div className={style.inputField}>
        <span>이름</span>
        <input className={style.input} type="text" name="name" ref={name}/>
      </div>      
      <input type="submit" name="signup_submit" className={style.submitBtn} value="가입완료"></input>
    </div>
    </>
  );
}

export default Register;