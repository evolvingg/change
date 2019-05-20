import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from './containers/App';
import Login from './components/Login';
import NewsFeed from './containers/NewsFeed';

import store, { history } from './store';

const authTransition = function authTransition(nextState, replace, callback) {
  const state = store.getState()
  const user = state.user

  // todo: in react-router 2.0, you can pass a single object to replace :)
  if (!user.isLoggedIn) {
    replace({ nextPathname: nextState.location.pathname }, '/login')
  }

  callback()
}

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        {/*<IndexRoute component={NewsFeed} onEnter={authTransition}></IndexRoute>*/}
        <Route path='/login' component={Login}></Route>
        <Route path='/feed/(:filter)' component={NewsFeed} onEnter={authTransition}></Route>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
