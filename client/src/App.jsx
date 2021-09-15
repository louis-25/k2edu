import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main'
import Course from './components/pages/Course/Course'

function App({ authService }) {
  const [loginState, setLogin] = useState('guest')
  const [time, setTime] = useState(0)
  const [token, setToken] = useState()  
  
  useEffect(async() => {
    setToken(authService.tokenStorage.getToken())
    // console.log('token ', token)
    // token ? setLogin('member') : setLogin('guest')

    setTimeout(async()=>{
      setTime(time + 1)
      if(loginState == 'member') {
        await authService.me().then((data)=>{
          console.log('data ', data)
          setLogin('member')
        }).catch(async(e)=>{          
          alert('장시간 움직임이 없어 로그아웃 됩니다')
          await authService.logout();
          setLogin('guest');
          window.location.replace("/")
          console.log('e ', e.message)
        })
      }
    }, 5000)      
    
  },[time])

  const test = () => {
    console.log(token)
  }

  return (
    <div className="App">            
    <button onClick={test}>test</button>
      <Switch>
        <Route exact path="/course">        
          <Course authService={authService} loginState={loginState} token={token}></Course>
        </Route> 
        <Route path="/">        
          <Main authService={authService} loginState={loginState} setLogin={setLogin}></Main>                
        </Route>                        
      </Switch>
      
    </div>
  );
}

export default App;
