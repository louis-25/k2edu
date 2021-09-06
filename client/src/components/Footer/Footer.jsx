import React from 'react';
import style from './Footer.module.css'

function Footer(props) {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <h4 className={style.title}>
          footer title
        </h4>
        <p className={style.content}>
          footer content
        </p>
      </div>      
    </div>
  );
}

export default Footer;