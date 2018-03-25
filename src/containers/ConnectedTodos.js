import Todos from '../components/Todos';
import connect from '../connect';
export default connect(state => ({
  todos: state.todos
}))(Todos);
