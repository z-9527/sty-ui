import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { HashRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')
);
