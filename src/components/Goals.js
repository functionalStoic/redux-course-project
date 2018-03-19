import React, { Component } from "react";
import List from "./List";
import { addGoalAction, removeGoalAction } from "../actionCreators";
import { generateId } from "../utils";
import { deleteGoal } from "../API";

export default class Goals extends Component {
  addItem = e => {
    e.preventDefault();
    const name = this.input.value;
    this.input.value = "";

    this.props.store.dispatch(
      addGoalAction({
        id: generateId(),
        name
      })
    );
  };

  removeItem = goal => {
    this.props.store.dispatch(removeGoalAction(goal.id));
    return deleteGoal(goal.id).catch(() => {
      this.props.store.dispatch(addGoalAction(goal));
      alert("There was an issue. Try again");
    });
  };

  render() {
    return (
      <div>
        <h1>Goal List</h1>
        <form>
          <input
            type="text"
            placeholder="Add Goal"
            ref={input => (this.input = input)}
          />
          <button onClick={this.addItem}>Add Goal</button>
        </form>
        <List items={this.props.goals} remove={this.removeItem} />
      </div>
    );
  }
}
