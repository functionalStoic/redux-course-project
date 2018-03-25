import React, { Component, Fragment } from 'react';
import ConectedTodos from './containers/ConectedTodos';
import ConnectedGoals from './containers/ConnectedGoals';
import { handleInitialData } from '../actionCreators';

export default class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;

    return loading === true ? (
      <h3>Loading...</h3>
    ) : (
      <Fragment>
        <ConnectedTodos />
        <ConnectedGoals />
      </Fragment>
    );
  }
}
