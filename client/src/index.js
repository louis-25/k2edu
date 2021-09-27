import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // 라우터

import AuthService from './service/auth.js';
import HttpClient from './network/http.js';
import TokenStorage from './db/token.js';
import { config } from './config.js'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const baseURL = config.http.baseURL;
const httpClient = new HttpClient(baseURL);
const tokenStorage = new TokenStorage();
const authService = new AuthService(httpClient, tokenStorage);

let store = createStore(()=>{ return [{token:'test', id:'초기값'}]})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App authService={authService} />      
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
