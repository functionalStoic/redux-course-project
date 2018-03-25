import React, { Component, Fragment } from 'react';
import Todos from './Todos';
import Goals from './Goals';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
class App extends Component {
  componentDidMount = () => this.props.dispatch(handleInitialData());

  render = () =>
    this.props.loading === true ? (
      <h3>Loading...</h3>
    ) : (
      <Fragment>
        <Todos />
        <Goals />
      </Fragment>
    );
}

export default connect(state => ({
  loading: state.loading
}))(App);
