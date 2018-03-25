import React, { Component, Fragment } from 'react';
import List from './List';
import {
  handleDeleteTodo,
  handleAddTodo,
  handleToggleTodo
} from '../actions/todos';
import { connect } from 'react-redux';

class Todos extends Component {
  addItem = () =>
    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ''))
    );

  removeItem = todo => this.props.dispatch(handleDeleteTodo(todo));

  toggleItem = id => this.props.dispatch(handleToggleTodo(id));

  render = () => (
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

export default connect(state => ({
  todos: state.todos
}))(Todos);
