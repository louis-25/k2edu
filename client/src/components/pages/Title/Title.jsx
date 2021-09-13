import React from 'react';
import style from './Title.module.css'

function Title({ title, description, breadscrumbs }) {
  
  
  return (
    <div className={style.container}>
      <div className={style.content}>
        
        <div className={style.breadscrumbs}>
          {
            breadscrumbs.map((bread) => {                                                    
              return (
                bread.href
                ? <span><a href={bread.href}>{bread.title}</a> {bread.next}</span>
                : <span> {bread.title} {bread.next}</span>
              )
            })            
          }
        </div>
        
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
      </div>
    </div>
  );
}

export default Title;