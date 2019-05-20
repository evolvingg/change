import * as actions from '../constants/actions';

export const upVote = id => ({
  type: actions.VOTE_UP,
  id
});

export const downVote = id => ({
    type: actions.VOTE_DOWN,
    id
});

export const toggleFavorite = id => ({
  type: actions.TOGGLE_FAVORITE,
  id
});

export const toggleFilter = filter => ({
  type: actions.TOGGLE_FILTER,
  filter
});

export const loginUser = email => ({
  type: actions.LOGIN_USER,
  email
});

export const logoutUser = () => ({
  type: actions.LOGOUT_USER
});

