import React, { Component, Fragment } from 'react';
import List from './List';
import { addGoalAction, removeGoalAction } from '../actionCreators';
import { deleteGoal, saveGoal } from '../API';

export default class Goals extends Component {
  addItem = e => {
    e.preventDefault();

    return saveGoal(this.input.value)
      .then(goal => {
        this.props.store.dispatch(addGoalAction(goal));
        this.input.value = '';
      })
      .catch(() => alert('There was an error. Try again.'));
  };

  removeItem = goal => {
    this.props.store.dispatch(removeGoalAction(goal.id));
    return deleteGoal(goal.id).catch(() => {
      this.props.store.dispatch(addGoalAction(goal));
      alert('There was an issue. Try again');
    });
  };

  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}
