import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import AuthService from './service/auth.js';
import HttpClient from './network/http.js';
import TokenStorage from './db/token.js';
import {config} from './config.js'

const baseURL = config.http.baseURL;
const httpClient = new HttpClient(baseURL);
const tokenStorage = new TokenStorage();
const authService = new AuthService(httpClient, tokenStorage);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);
