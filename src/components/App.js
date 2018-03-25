import React, { Component, Fragment } from 'react';
import ConnectedTodos from '../containers/ConnectedTodos';
import ConnectedGoals from '../containers/ConnectedGoals';
import { handleInitialData } from '../actionCreators';

export default class App extends Component {
  componentDidMount = () => this.props.dispatch(handleInitialData());

  render = () =>
    this.props.loading === true ? (
      <h3>Loading...</h3>
    ) : (
      <Fragment>
        <ConnectedTodos />
        <ConnectedGoals />
      </Fragment>
    );
}
