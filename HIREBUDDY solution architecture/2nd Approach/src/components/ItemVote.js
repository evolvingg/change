import React from 'react';

let ItemVote = (props) => (
  <div className="list-story-grouper list-story-upvote-grouper">
    <button aria-label="Upvote this story to 9 points" className="story-vote-button toggle-login" onClick={props.upVote.bind(null, props.id)}>
      <i className="fa fa-chevron-up"></i>
    </button>
    <span className="story-current-votes">{props.votes}</span>
    <button aria-label="Downvote this story to 7 points" className="story-vote-button toggle-login" onClick={props.downVote.bind(null, props.id)}>
      <i className="fa fa-chevron-down"></i>
    </button>
  </div>
);

export default ItemVote;

