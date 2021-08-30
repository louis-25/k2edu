import React, { useRef } from 'react';
import style from './Login.module.css'
import AuthService from '../../service/auth';

function Login(props) {    
  return (
    <div>
      <form action="http://localhost:8081/auth/login" method="post" encType="application/json">
        <input type="text" name="username" ref={username} placeholder="id"/><br/>
        <input type="password" name="password" ref={password} placeholder="pw"/><br/>
        <button type='submit'>전송</button>
      </form>      
    </div>
  );
}

export default Login;