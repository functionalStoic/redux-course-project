import Todos from '../components/Todos';

export default connect(state => ({
  todos: state.todos
}))(Todos);
