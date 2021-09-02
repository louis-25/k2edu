import { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App({authService}) {
  const [loginState, setLogin] = useState('guest')

  useEffect(() => {
    console.log('token ',authService.tokenStorage.getToken())
    authService.tokenStorage.getToken() ? setLogin('member') : setLogin('guest')
  })

  return (
    <div className="App">
      <Route exact path="/">
        <Header authService={authService} loginState={loginState}></Header>
          <Main authService={authService} loginState={loginState}></Main>
        <Footer></Footer>
      </Route>
      <Route exact path="/main">
        <Main authService={authService}></Main>
      </Route>
    </div>
  );
}

export default App;
