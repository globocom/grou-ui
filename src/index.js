import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter, Route, Switch} from 'react-router-dom'
import './css/bulma.min.css';
import './css/index.css';
import './css/admin.css';
import Login from './components/Login'
import App from './components/App';


ReactDOM.render(
  <div className="column is-12">
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/' component={App}/>
    </Switch>
  </BrowserRouter>
  </div>
  ,document.getElementById('root')
);
