import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_GOAL,
  REMOVE_GOAL,
  RECEIVE_DATA,
  STANDARD_ERROR
} from './constants';

import {
  saveGoal,
  deleteGoal,
  saveTodo,
  saveTodoToggle,
  deleteTodo
} from './API';

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
      alert(STANDARD_ERROR);
    });
  };
}

export function handleDeleteGoal(goal) {
  return dispatch => {
    dispatch(removeGoalAction(goal.id));
    return deleteGoal(goal.id).catch(() => {
      dispatch(addGoalAction(goal));
      alert(STANDARD_ERROR);
    });
  };
}

export function handleAddGoal(name, cb) {
  return dispatch =>
    saveGoal(name)
      .then(goal => {
        dispatch(addGoalAction(goal));
        cb();
      })
      .catch(() => alert(STANDARD_ERROR));
}

export function handleAddTodo(name, cb) {
  return dispatch =>
    saveTodo(name)
      .then(todo => {
        dispatch(addTodoAction(todo));
        cb();
      })
      .catch(() => alert(STANDARD_ERROR));
}

export function handleToggleTodo(id) {
  return dispatch => {
    dispatch(toggleTodoAction(id));
    return saveTodoToggle(id).catch(() => {
      dispatch(toggleTodoAction(id));
      alert(STANDARD_ERROR);
    });
  };
}
