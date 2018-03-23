import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_GOAL,
  REMOVE_GOAL,
  RECEIVE_DATA
} from './constants';

import { deleteTodo } from './API';

export function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

export function removeTodoAction(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

export function toggleTodoAction(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}

export function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}

export function receiveDataAction(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  };
}

export function handleDeleteTodo(todo) {
  return dispatch => {
    dispatch(removeTodoAction(todo.id));
    return deleteTodo(todo.id).catch(() => {
      dispatch(addTodoAction(todo));
      alert('An error occurred. Try again');
    });
  };
}

// export function fetchingData() {
//   return {
//     type: 'FETCHING_DATA'
//   };
// }

// export function fetchingDataError(error) {
//   return {
//     type: 'FETCHING_DATA_ERROR',
//     error: error.msg
//   };
// }

// export function fetchingDataSuccess(data) {
//   return {
//     type: 'FETCHING_DATA_SUCCESS',
//     data
//   };
// }

// export function fetchAndHandleData() {
//   return dispatch => {
//     // dispatch(fetchingData());
//     // getData()
//     //   .then(data => dispatch(fetchingDataSuccess(data)))
//     //   .catch(error => dispatch(fetchingDataError(error)));
//   };
// }
