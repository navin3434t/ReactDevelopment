import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './templates/App'
import './css/main.css';
import store from './store/store'

render(
<Provider store={store}>
  <App  store={store}/>
  </Provider>,
  document.getElementById('root')
)

