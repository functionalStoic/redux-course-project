import { fetchTodos, fetchGoals } from 'goals-todos-api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

export const STANDARD_ERROR = 'An error occurred. Please try again';

function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  };
}

export function handleInitialData() {
  return dispatch =>
    Promise.all([fetchTodos(), fetchGoals()]).then(([todos, goals]) =>
      dispatch(receiveData(todos, goals))
    );
}
