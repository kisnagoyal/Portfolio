import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom"  //installing from terminal "npm install reat-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//imported from browserRouter
  <BrowserRouter> 
    <App />
  </BrowserRouter>
);


