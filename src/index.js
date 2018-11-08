import React from 'react';
import ReactDOM from 'react-dom';
import { Router, BrowserRouter } from 'react-router-dom';
import Route from './Router.js';


ReactDOM.render(
    <Router history={BrowserRouter} Router={Router} />
  , document.getElementById('root')
);