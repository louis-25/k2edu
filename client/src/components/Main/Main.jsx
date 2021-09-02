import React from 'react';
import { useHistory } from 'react-router-dom';

function Main({authService, loginState}) {
  const history = useHistory()  

  function menu(a) {
    switch(a){
      case 1:
        return <h1>menu 1</h1>
      case 2:
        return <h1>menu 2</h1>
      case 3:
        return <h1>menu 3</h1>
      case 4:
        return <h1>menu 4</h1>
    }
  }

  return (
    <div>
      <h1>Main !!!</h1>
      {menu(1)}
    </div>
  );
}

export default Main;