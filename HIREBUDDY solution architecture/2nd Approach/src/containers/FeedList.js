import React from 'react';

import FeedItem from '../components/FeedItem';
import * as filters from '../constants/filters';

class FeedList extends React.Component {
  render() {
    let { feed, actions, params } = this.props,
      feedList = feed.slice(0);

    switch (params.filter) {
      case filters.FILTER_TOPVOTED:
        feedList.sort((a, b) => a.votes < b.votes);
        break;
      case filters.FILTER_STARRED:
        feedList = feedList.filter(item => item.isStarred);
        break;
      default:
        break;
    }

    feedList = feedList.map(item => {
      return (
        <FeedItem key={item._id} {...item} {...actions}/>
      );
    });

    return (
      <ul className="montana-list-items">
        {feedList}
      </ul>
    );
  }
}

export default FeedList;