import React from 'react';
import Title from '../Title/Title'

function Contact(props) {
  const title = "Contact"
  const description = "Contact 페이지입니다"
  const breadscrumbs = [
    {
      title:"홈",
      href:"/",
      next:"/"
    },
    {
      title:"Contact",
      href:undefined,
      next:""
    }
  ]

  return (
    <div>
      <Title title={title} description={description} breadscrumbs={breadscrumbs}></Title>
      <p>Contact</p>
    </div>
  );
}

export default Contact;