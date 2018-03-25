import Todos from '../components/Todos';
import { connect } from 'react-redux';

export default connect(state => ({
  todos: state.todos
}))(Todos);
