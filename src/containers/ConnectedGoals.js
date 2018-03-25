import Goals from '../components/Goals';
import { connect } from 'react-redux';

export default connect(state => ({
  goals: state.goals
}))(Goals);
