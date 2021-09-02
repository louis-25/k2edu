import React from 'react';
import { useHistory } from 'react-router-dom';

function Main({authService}) {
  const history = useHistory()  

  const Logout = () => {
    authService.logout();
    history.push({
      pathname:'/login'
    })
  }
  
  return (
    <div>
      <h1>Main !!!</h1>
      <button onClick={Logout}>Logout!</button>
    </div>
  );
}

export default Main;