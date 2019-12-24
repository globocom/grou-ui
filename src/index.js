import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter, Route, Switch} from 'react-router-dom'
import './css/bulma.min.css';
import './css/index.css';
import './css/admin.css';
import Login from './components/Login'
import App from './components/App';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/' component={App}/>
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
);
