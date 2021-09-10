import React from 'react';
import style from './Title.module.css'

function Title(props) {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.breadscrumbs}><a href="/">홈</a> / About</div>
        <div className={style.title}>About</div>
        <div className={style.description}>About페이지 입니다~!</div>
      </div>
    </div>
  );
}

export default Title;