import React from 'react';
import { render } from 'react-dom';
import Provider from './Provider';
import ConnectedApp from './containers/ConnectedApp';
import store from './store';

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
