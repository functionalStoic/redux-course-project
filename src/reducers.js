import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_GOAL,
  REMOVE_GOAL,
  RECEIVE_DATA
} from './constants';

export function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id !== action.id
            ? todo
            : Object.assign({}, todo, { complete: !todo.complete })
      );
    case RECEIVE_DATA:
      return action.todos;
    default:
      return state;
  }
}

export function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id);
    case RECEIVE_DATA:
      return action.goals;
    default:
      return state;
  }
}

export function loading(state = true, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}

export function fetchData(
  state = {
    data: [],
    isFetching: false,
    error: ''
  },
  action
) {
  switch (action.type) {
    case 'FETCHING_DATA':
      return {
        ...state,
        isFetching: true
      };
    case 'FETCHING_DATA_ERROR':
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case 'FETCHING_DATA_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.data
      };

    default:
      return state;
  }
}
