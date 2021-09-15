import React from 'react';
import Title from '../Title/Title';


function NotFound(props) {

  const title = "잘못된 접근입니다"
  const description = "홈으로 돌아가십시오"
  const breadscrumbs = [
    {
      title:"홈",
      href:"/",
      next:""
    },    
  ]

  return (
    <div>
      <Title title={title} description={description} breadscrumbs={breadscrumbs}></Title>        
      <h1>NotFound!!!</h1>
    </div>
  );
}

export default NotFound;