import React, { useRef } from 'react';
import style from './Login.module.css'
import AuthService from '../../service/auth';
import axios from 'axios';

function Login(props) {    

  const username = useRef()
  const password = useRef()

  const postLogin = async(e) =>{
    e.preventDefault()
    // console.log('test')
    // const result = await fetch('http://localhost:8081/auth/login',{
    //   method: 'POST',
    //   headers: {'Content-Type':'application/json'},
    //   body: JSON.stringify({'username':username.current.value, 'password':password.current.value})
    // })
    // console.log('result ',result)
    axios({
      method: 'POST',
      url: 'http://localhost:8081/auth/login',
      data: {'username': username.current.value, 'password': password.current.value},
      responseType: 'json'
    }).then((result)=>{
      console.log(result)
    })
    
  }

  return (
    <div>
      <form action="http://localhost:8081/auth/login" method="post" encType="application/json">
        <input type="text" name="username" ref={username} placeholder="id"/><br/>
        <input type="password" name="password" ref={password} placeholder="pw"/><br/>
        <button type='submit' onClick={postLogin}>전송</button>
      </form>      
    </div>
  );
}

export default Login;