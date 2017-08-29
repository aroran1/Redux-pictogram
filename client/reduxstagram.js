import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// Import React Router Deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Import Provioder that binds redux with react
import { Provider } from 'react-redux';

// Import Store and named history export
import store, { history } from './stores/store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
