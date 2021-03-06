import React from 'react';
import Title from '../Title/Title'

function About(props) {
  const title = "About"
  const description = "About 페이지입니다"
  const breadscrumbs = [
    {
      title:"홈",
      href:"/",
      next:"/"
    },
    {
      title:"About",
      href:undefined,
      next:""
    }
  ]

  return (
    <div>
      <Title title={title} description={description} breadscrumbs={breadscrumbs}></Title>
      <p>About</p>
    </div>
  );
}

export default About;