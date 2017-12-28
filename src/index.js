import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './containers/Root'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
