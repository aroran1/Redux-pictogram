import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/appActionCreator';

import Main from './Main';

function mapStateToProps(state) {
    return {
      posts: state.posts,
      comments: state.comments
    }
}

function mapsDispatchToProps(dispatch ) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps,  mapsDispatchToProps)(Main);

export default App;
