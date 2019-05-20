import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from '../reducers';

import feed from '../data/feed';

// create an object for the default data
const defaultState = {
  feed,
  user: {},
  filter: 'all'
};

// CREATE STORE
const store = createStore(rootReducer, defaultState

// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
