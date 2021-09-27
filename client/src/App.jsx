import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main'
import Course from './components/pages/Course/Course'
import {connect} from 'react-redux'

function App({ authService }) {
  const history = useHistory()
  const [loginState, setLogin] = useState('guest')
  const [time, setTime] = useState(0)
  const [token, setToken] = useState()  
  const storage = authService.tokenStorage
  let timeController

  useEffect(async() => {    
    console.log('token ', storage.getToken())    
      await authService.me().then((data)=>{
        console.log('data ', data)        
        setLogin('member');        
        startInterval()
      }).catch((e)=>{                
        authService.logout();        
        clearInterval(timeController);
        setLogin('guest');        
        stopInterval()
        // window.location.replace("/")
        console.log('e ', e.message)
      })          
  },[])

  function startInterval() {    
    timeController = setInterval(async()=>{
      await authService.me().then((data)=>{
        console.log('interval ',data)
      }).catch((e)=>{
        console.log('interval ',e)      
        stopInterval()
        alert('로그인 시간 만료')
        window.location.replace("/")
      })
    },3000)    
  }

  function stopInterval() {
    clearInterval(timeController)
  }

  // useEffect(()=>{
  //   setTimeout(async()=>{
  //     await authService.me().then(()=>{
  //       setTimeout(time+1)
  //     }).catch((e)=>{
  //       console.log('error ',e)
  //     })
  //   })
  // },[time])

  const test = () => {
    console.log(storage.getToken())
    console.log(loginState)
  }

  return (
    <div className="App">            
    <button onClick={test}>test</button>
      <Switch>
        <Route exact path="/course">        
          <Course authService={authService} loginState={loginState} token={token}></Course>
        </Route> 
        <Route path="/">        
          <Main authService={authService} loginState={loginState} token={token} setLogin={setLogin}></Main>                
        </Route>
      </Switch>
      
    </div>
  );
}

function authToken(state){
  return {
    state : state
  }
}

export default connect(authToken)(App);
