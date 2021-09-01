import React, { useRef } from 'react';
import style from './Login.module.css'
import axios from 'axios';

function Login({authService}) {    

  const id = useRef()
  const pw = useRef()

  const postLogin = async(e) =>{
    e.preventDefault()
    
    console.log('id ',id.current.value)
    console.log('pw ',pw.current.value)
    authService.login(id.current.value, pw.current.value)
    .then((data)=>{
      console.log('data ',data)
    })
    .catch((e)=>{
      console.log('error ',e)
    })    
    
  }

  return (
    <div>
      <form>
        <input type="text" name="username" ref={id} placeholder="id"/><br/>
        <input type="password" name="password" ref={pw} placeholder="pw"/><br/>
        <button type='submit' onClick={postLogin}>전송</button>
      </form>      
    </div>
  );
}

export default Login;