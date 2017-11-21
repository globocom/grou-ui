import React from 'react';
import ReactDOM from 'react-dom';
import {  Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import './css/bulma.min.css';
import './css/index.css';
import './css/admin.css';
import Login from './components/Login'
import App from './components/App';
import NoMatch from './components/NoMatch';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <div className="column is-12">
  <Router>
  <Route path='/login' component={Login}/>
  </Router>
  </div>
  ,document.getElementById('root'));
registerServiceWorker();
