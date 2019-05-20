import * as actions from '../constants/actions';

let initialState = [];

function feed(state = initialState, action) {
  switch (action.type) {

    case actions.VOTE_UP:
      return state.map(item => (
        item._id === action.id ?
          { ...item, votes: item.votes + 1 } :
          item
      ));

    case actions.VOTE_DOWN:
      return state.map(item => (
        item._id === action.id ?
        { ...item, votes: item.votes - 1 } :
          item
      ));

    case actions.TOGGLE_FAVORITE:
      return state.map(item => (
        item._id === action.id ?
        { ...item, isStarred: !item.isStarred } :
          item
      ));

    default:
      return state;

  }
}

export default feed;
