import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers';
import { Provider } from 'react-redux';
import store from './store';
if (process.env.NODE_ENV === 'development') {
  // require ('./mock');  
}
const mountNode = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode);
