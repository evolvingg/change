import React from 'react';

let FavoriteStar = (props) => {
  var toggleFavorite = (e) => {
    e.preventDefault();
    props.toggleFavorite(props.id);
  }

  return (
    <div className="list-story-grouper">
      <a href="#"
         className="story-star-button"
         onClick={toggleFavorite}>
        { props.isStarred ? (
          <i className="fa fa-star"
             aria-hidden="true"></i>
        ) : (
          <i className="fa fa-star-o"
             aria-hidden="true"></i>
        ) }
      </a>
    </div>
  )
};

export default FavoriteStar;
