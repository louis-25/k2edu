import React from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import Visual from './Visual/Visual';
import Register from '../pages/Register/Register';
import About from '../pages/About/About'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';
import style from './Main.module.css';


function Main({authService, loginState, setLogin}) {
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
    <div className={style.page}>
      <div className={style.header}><Header authService={authService} loginState={loginState} setLogin={setLogin}></Header></div>
        
        <Switch>
          <Route exact path="/">
            <div>
              <Visual></Visual>
              {menu(1)}
            </div>
          </Route>
          <Route exact path="/register">
            <div><Register authService={authService}></Register></div>
          </Route>
          <Route exact path="/about">
            <div><About></About></div>
          </Route>
          <Route exact path="/contact">
            <div><Contact></Contact></div>
          </Route>      
          <Route path="*">
              <div><NotFound></NotFound></div>
          </Route>
        </Switch>            
      <div className={style.footer}><Footer></Footer></div>
    </div>
  );
}

export default Main;