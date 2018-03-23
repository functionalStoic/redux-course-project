import React, { Component, Fragment } from 'react';
import List from './List';
import {
  handleDeleteTodo,
  handleAddTodo,
  handleToggleTodo
} from '../actionCreators';

export default class Todos extends Component {
  addItem = () =>
    this.props.store.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ''))
    );

  removeItem = todo => this.props.store.dispatch(handleDeleteTodo(todo));

  toggleItem = id => this.props.store.dispatch(handleToggleTodo(id));

  render() {
    return (
      <Fragment>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add Todo"
          ref={input => (this.input = input)}
          onKeyPress={event => (event.key === 'Enter' ? this.addItem() : null)}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggleItem}
        />
      </Fragment>
    );
  }
}
