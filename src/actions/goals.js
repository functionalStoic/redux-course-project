import { saveGoal, deleteGoal } from 'goals-todos-api';
import { STANDARD_ERROR } from './shared';
export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}

export function handleAddGoal(name, cb) {
  return dispatch =>
    saveGoal(name)
      .then(goal => {
        dispatch(addGoal(goal));
        cb();
      })
      .catch(() => alert(STANDARD_ERROR));
}

export function handleDeleteGoal(goal) {
  return dispatch => {
    dispatch(removeGoal(goal.id));
    return deleteGoal(goal.id).catch(() => {
      dispatch(addGoal(goal));
      alert(STANDARD_ERROR);
    });
  };
}
