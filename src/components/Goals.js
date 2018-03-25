import React, { Component, Fragment } from 'react';
import List from './List';
import { handleDeleteGoal, handleAddGoal } from '../actionCreators';

export default class Goals extends Component {
  addItem = () =>
    this.props.dispatch(
      handleAddGoal(this.input.value, () => (this.input.value = ''))
    );

  removeItem = goal => this.props.dispatch(handleDeleteGoal(goal));

  render() {
    return (
      <Fragment>
        <h1>Goal List</h1>
        <input
          type="text"
          placeholder="Add Goal"
          ref={input => (this.input = input)}
          onKeyPress={event => (event.key === 'Enter' ? this.addItem() : null)}
        />
        <button onClick={this.addItem}>Add Goal</button>
        <List items={this.props.goals} remove={this.removeItem} />
      </Fragment>
    );
  }
}
