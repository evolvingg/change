import React from 'react';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let ItemDetails = (props) => (
  <div className="list-story-grouper list-story-main-grouper">
    <a href={props.domain} alt={props.title} className="montana-item-title"> {capitalizeFirstLetter(props.title)} <span className="list-story-domain">({props.domain})</span></a>
    <div className="montana-item-meta">
      <a href="/stories/75773-noah-stokes" className="list-story-comment-count">{props.comments} comments</a>
      <span className="montana-item-meta-bullet">.</span>
      <abbr className="list-story-time-ago time-ago" title={props.posted}>{props.posted}</abbr>
      <span>from <a href="/users/6874/nathan-huening" data-card="6874">{props.name.first + ' ' + props.name.last}</a>, {capitalizeFirstLetter(props.designation)}</span>
    </div>
  </div>
);

export default ItemDetails;

