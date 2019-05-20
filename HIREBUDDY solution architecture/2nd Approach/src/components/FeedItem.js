import React from 'react';

import ItemVote from './ItemVote';
import ItemDetails from './ItemDetails';
import FavoriteStar from './FavoriteStar';

class FeedItem extends React.Component {
  render() {
    var { upVote, downVote, toggleFavorite } = this.props;

    return (
      <li className="story-list-item montana-list-item">
        <ItemVote votes={this.props.votes} upVote={upVote} downVote={downVote} id={this.props._id}/>
        <ItemDetails {...this.props}/>
        <FavoriteStar isStarred={this.props.isStarred} id={this.props._id} toggleFavorite={toggleFavorite}/>
      </li>
    );
  }
}

export default FeedItem;
