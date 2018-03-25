import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/';
import { checker, logger } from './middleware';

import ReduxThunk from 'redux-thunk';

export default createStore(
  reducers,
  applyMiddleware(ReduxThunk, checker, logger)
);
