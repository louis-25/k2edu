import './App.css';
import Login from './components/Login/Login'

function App({authService}) {
  return (
    <div className="App">
      <Login authService={authService}></Login>
    </div>
  );
}

export default App;
