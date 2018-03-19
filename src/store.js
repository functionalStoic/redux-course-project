import { createStore, combineReducers, applyMiddleware } from "redux";
import { todos, goals, loading } from "./reducers";
import { checker, logger } from "./middleware";

export default createStore(
  combineReducers({
    todos,
    goals,
    loading
  }),
  applyMiddleware(checker, logger)
);
