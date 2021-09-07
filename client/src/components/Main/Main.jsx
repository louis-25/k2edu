import React from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import Visual from './Visual/Visual';
import Register from '../pages/Register/Register';
import About from '../pages/About/About'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
      <Header authService={authService} loginState={loginState}></Header>
      <Route exact path="/">
        <Visual></Visual>
        {menu(1)}
      </Route>
      <Route exact path="/register">
        <Register authService={authService}></Register>
      </Route>
      <Route exact path="/about">
        <About></About>
      </Route>
      <Footer></Footer>
    </div>
  );
}

export default Main;