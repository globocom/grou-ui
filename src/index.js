import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './css/bulma.min.css';
import './css/index.css';
import './css/admin.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
  ,document.getElementById('root'));
registerServiceWorker();
