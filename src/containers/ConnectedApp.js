import App from '../components/App';
import connect from '../connect';
export default connect(state => ({
  loading: state.loading
}))(App);
