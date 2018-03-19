import React, { Component } from "react";
import List from "./List";
import {
  addTodoAction,
  removeTodoAction,
  toggleTodoAction
} from "../actionCreators";
import { generateId } from "../utils";
import { deleteTodo, saveTodoToggle } from "../API";

export default class Todos extends Component {
  addItem = e => {
    e.preventDefault();
    const name = this.input.value;
    this.input.value = "";

    this.props.store.dispatch(
      addTodoAction({
        id: generateId(),
        name,
        complete: false
      })
    );
  };

  removeItem = todo => {
    this.props.store.dispatch(removeTodoAction(todo.id));
    return deleteTodo(todo.id).catch(() => {
      this.props.store.dispatch(addTodoAction(todo));
      alert("An error occurred. Try again");
    });
  };

  toggleItem = id => {
    this.props.store.dispatch(toggleTodoAction(id));
    return saveTodoToggle(id).catch(() => {
      this.props.store.dispatch(toggleTodoAction(id));
      alert("An error occurred. Try again");
    });
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}
