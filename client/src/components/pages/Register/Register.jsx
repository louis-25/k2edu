import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Register.module.css'
import Title from '../Title/Title'

function Register({authService}) {
  const history = useHistory();
  const [register,setRegister] = useState(false);

  const id = useRef();
  const email = useRef();
  const password = useRef();
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

  const handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleAccount({
      email: e.target.email.value,
      pwd: e.target.pwd.value,
      nickname: e.target.nickname.value,
      name: e.target.name.value
    });
  }

  const onSubmit = async(e) => {
    e.preventDefault()
    console.log('id ',id.current.value)
    console.log('email ',email.current.value)
    console.log('password ',password.current.value)
    console.log('passwordRe ',passwordRe.current.value)
    console.log('name ',name.current.value)

    console.log(id)
    console.log(email)
    console.log(password)
    console.log(passwordRe)
    console.log(name)
    
    authService.signup(
      id.current.value, 
      email.current.value, 
      password.current.value, 
      passwordRe.current.value, 
      name.current.value)
      .then((data)=>{
        console.log(data)
        setRegister(true)
      })
      .catch((e)=>{
        alert(e)
      })
  }        


  return (
    <>
    <Title title={title} description={description} breadscrumbs={breadscrumbs}></Title>        
    {
    !register ?
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
        <input className={style.input} type="password" name="password" ref={password}/>
      </div>
      <div className={style.inputField}>
        <span>비밀번호 재입력</span>
        <input className={style.input} type="password" name="passwordRe" ref={passwordRe}/>
      </div>
      <div className={style.inputField}>
        <span>이름</span>
        <input className={style.input} type="text" name="name" ref={name}/>
      </div>      
      <input type="submit" onClick={onSubmit} className={style.submitBtn} value="가입완료"></input>
    </div>        
    :
    <div>정상 가입되셨습니다</div>
    }
    </>
  );
}

export default Register;