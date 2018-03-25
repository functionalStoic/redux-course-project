import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import reducer from './reducers/';
import middleware from './middleware/';

import { Provider } from 'react-redux';
import App from './components/App';

const store = createStore(reducer, middleware);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
