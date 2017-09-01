import { createStore, reducers, compose } from 'redux';
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

// Redux dev tool extension
const enhancer = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancer);
export const history = syncHistoryWithStore( browserHistory, store );

// Reducers hot reload
if(module.hot){
  module.hot.accept('../reducers/', ()=> {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
