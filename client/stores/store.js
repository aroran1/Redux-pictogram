import { createStore, reducers } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router' ;


// import root reducer
import rootReducer from '../reducers/index';

// import data - so app have some information when it loads
import comments from '../data/comments';
import posts from '../data/posts';

// crteate an object for the default data
const defaultState = {
  posts,
  comments
};

const store = createStore( rootReducer, defaultState );
export const history = syncHistoryWithStore( browserHistory, store );

export default store;
