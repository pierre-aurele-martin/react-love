import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

import store from './store/';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let modules = [];

ReactDOM.render(
  <Provider store={store}>
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <App />
    </Loadable.Capture>
  </Provider>,
  document.getElementById('root')
);

console.log('Captured loading modules ==> ', modules);


registerServiceWorker();
