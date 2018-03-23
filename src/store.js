import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todos, goals, loading } from './reducers';
import { checker, logger } from './middleware';

import ReduxThunk from 'redux-thunk';

export default createStore(
  combineReducers({
    todos,
    goals,
    loading
  }),
  applyMiddleware(ReduxThunk, checker, logger)
);
