import React, { Component, Fragment } from 'react';
import List from './List';
import {
  addTodoAction,
  toggleTodoAction,
  handleDeleteTodo
} from '../actionCreators';
import { saveTodoToggle, saveTodo } from '../API';

export default class Todos extends Component {
  addItem = e => {
    e.preventDefault();

    return saveTodo(this.input.value)
      .then(todo => {
        this.props.store.dispatch(addTodoAction(todo));
        this.input.value = '';
      })
      .catch(() => alert('There was an error. Try again.'));
  };

  removeItem = todo => this.props.store.dispatch(handleDeleteTodo(todo));

  toggleItem = id => {
    this.props.store.dispatch(toggleTodoAction(id));
    return saveTodoToggle(id).catch(() => {
      this.props.store.dispatch(toggleTodoAction(id));
      alert('An error occurred. Try again');
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Todo List</h1>
        <form>
          <input
            type="text"
            placeholder="Add Todo"
            ref={input => (this.input = input)}
          />
          <button onClick={this.addItem}>Add Todo</button>
        </form>
        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggleItem}
        />
      </Fragment>
    );
  }
}
