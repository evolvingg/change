import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

import feed from './feed';
import user from './user';
import filter from './filter';

let rootReducer = combineReducers({
  feed,
  user,
  filter,
  routing: routerReducer
});

export default rootReducer;