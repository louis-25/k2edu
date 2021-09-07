import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main'
import Course from './components/pages/Course/Course'

function App({ authService }) {
  const [loginState, setLogin] = useState('guest')

  useEffect(() => {
    console.log('token ', authService.tokenStorage.getToken())
    authService.tokenStorage.getToken() ? setLogin('member') : setLogin('guest')
  })

  return (
    <div className="App">            
      <Switch>
        <Route exact path="/course">        
          <Course></Course>
        </Route> 
        <Route path="/">        
          <Main authService={authService} loginState={loginState}></Main>                
        </Route>                                         
      </Switch>
    </div>
  );
}

export default App;
