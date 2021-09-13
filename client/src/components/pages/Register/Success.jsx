import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Success.module.css'
import Title from '../Title/Title'

function Success({authService}) {
  const history = useHistory();
  
  const title = "회원가입 완료"
  const description = "정상적으로 회원가입 되셨습니다~!"
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
          
      <input type="submit" onClick={onSubmit} className={style.submitBtn} value="홈으로 돌아가기"></input>       
    </>
  );
}

export default Success;