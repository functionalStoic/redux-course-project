import App from '../components/App';

export default connect(state => ({
  loading: state.loading
}))(App);
