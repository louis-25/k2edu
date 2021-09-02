import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login'
import Main from './components/Main/Main'

function App({authService}) {
  const history = useHistory()
  const goToMain = () => {
    history.push({
      pathname:'/main'
    })
  }

  const goToLogin = () => {
    history.push({
      pathname:'/login'
    })
  }

  useEffect(() => {
    console.log('token ',authService.tokenStorage.getToken())
    authService.tokenStorage.getToken() ? goToMain() : goToLogin()
  })

  return (
    <div className="App">
      <Route exact path="/login">
        <Login authService={authService}></Login>
      </Route>
      <Route exact path="/main">
        <Main authService={authService}></Main>
      </Route>
    </div>
  );
}

export default App;
