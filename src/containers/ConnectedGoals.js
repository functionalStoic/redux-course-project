import Goals from '../components/Goals';

export default connect(state => ({
  goals: state.goals
}))(Goals);
