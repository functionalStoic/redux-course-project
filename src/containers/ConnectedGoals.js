import Goals from '../components/Goals';
import connect from '../connect';
export default connect(state => ({
  goals: state.goals
}))(Goals);
