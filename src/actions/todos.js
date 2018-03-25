import { saveTodo, saveTodoToggle, deleteTodo } from 'goals-todos-api';
import { STANDARD_ERROR } from './shared';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function handleAddTodo(name, cb) {
  return dispatch =>
    saveTodo(name)
      .then(todo => {
        dispatch(addTodo(todo));
        cb();
      })
      .catch(() => alert(STANDARD_ERROR));
}

export function handleDeleteTodo(todo) {
  return dispatch => {
    dispatch(removeTodo(todo.id));
    return deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo));
      alert(STANDARD_ERROR);
    });
  };
}

export function handleToggleTodo(id) {
  return dispatch => {
    dispatch(toggleTodo(id));
    return saveTodoToggle(id).catch(() => {
      dispatch(toggleTodo(id));
      alert(STANDARD_ERROR);
    });
  };
}
