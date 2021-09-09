import React, { useRef } from 'react';
import style from './Register.module.css'

function Register(props) {
  const id = useRef();
  const email = useRef();
  const passowrd = useRef();
  const passwordRe = useRef();
  const name = useRef();

  return (
    <div>      
      <span></span>
      <input className={style.input} type="text" name="id" ref={id} placeholder="아이디"/><br/>
      <input className={style.input} type="email" name="email" ref={email} placeholder="이메일 주소"/><br/>
      <input className={style.input} type="password" name="password" ref={passowrd} placeholder="비밀번호 입력"/><br/>
      <input className={style.input} type="password" name="passwordRe" ref={passwordRe} placeholder="비밀번호 재입력"/><br/>
      <input className={style.input} type="text" name="name" ref={name} placeholder="이름"/><br/>
    </div>
  );
}

export default Register;