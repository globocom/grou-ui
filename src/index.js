import React from 'react';
import ReactDOM from 'react-dom';
import './css/bulma.min.css';
import './css/index.css';
import './css/admin.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
