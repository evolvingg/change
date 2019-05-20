import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from './containers/App';
import Login from './components/Login';
import RecruiterDashboard from './containers/RecruiterDashboard';

import store, { history } from './store';

const authTransition = function authTransition(nextState, replace, callback) {
  const state = store.getState()
  const user = state.user

  // todo: in react-router 2.0, you can pass a single object to replace :)
  if (!user.isLoggedIn) {
    replace({ nextPathname: nextState.location.pathname }, '/')
  }

  callback()
}

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Login}></IndexRoute>
        <Route path='/recruiter-dashboard' component={RecruiterDashboard} onEnter={authTransition}></Route>
        <Route path='/panelist-dashboard' component={PanelistDashboard} onEnter={authTransition}></Route>
        <Route path='/view-completed' component={ViewCompleted} onEnter={authTransition}></Route>
        <Route path='/add-candidate-container' component={AddCandidateContainer} onEnter={authTransition}></Route>
        <Route path='/candidate-profile' component={CandidateProfile} onEnter={authTransition}></Route>
        <Route path='/domain-round' component={DomainRound} onEnter={authTransition}></Route>
        <Route path='/ai-round' component={AIRound} onEnter={authTransition}></Route>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
