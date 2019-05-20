import React from 'react';
import { Link } from 'react-router';

class FeedFilterNav extends React.Component {
  render() {
    let filter = this.props.filter;

    return (
      <nav id="sub-navigation-container">
        <div className="wrap padded">
          <ul id="sub-navigation-list-items">
            <div id="sub-navigation-visible-items">
              <li><Link to="/feed/all" className={filter === 'all' ? 'active' : ''}>All</Link></li>
              <li><Link to="/feed/topvoted" className={filter === 'topvoted' ? 'active' : ''}>Top Voted</Link></li>
              <li><Link to="/feed/starred" className={filter === 'starred' ? 'active' : ''}>Starred</Link></li>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

export default FeedFilterNav;
