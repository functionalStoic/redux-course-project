import React, { Component, Fragment } from 'react';
import Todos from './Todos';
import Goals from './Goals';
import { handleInitialData } from '../actionCreators';

export default class App extends Component {
  componentDidMount() {
    const { dispatch, subscribe } = this.props.store;
    dispatch(handleInitialData());
    subscribe(() => this.forceUpdate());
  }

  render() {
    const { store } = this.props;
    const { todos, goals, loading } = store.getState();

    return loading === true ? (
      <h3>Loading...</h3>
    ) : (
      <Fragment>
        <Todos todos={todos} store={store} />
        <Goals goals={goals} store={store} />
      </Fragment>
    );
  }
}
