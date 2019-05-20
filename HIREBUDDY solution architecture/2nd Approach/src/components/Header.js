import React from 'react';
import { Link } from 'react-router';

import { withRouter } from 'react-router';

class Header extends React.Component {
  logoutUser(e) {
    e.preventDefault();
    this.props.actions.logoutUser();
    this.props.router.push('/login');
  }

  render() {
    let isLoggedIn = this.props.user.isLoggedIn;
    return(
        <div id="header-container" className="with-sub-navigation">
         <header id="site-header">
            <div id="header-bar">
               <div className="wrap padded">
                  <div id="header-left-wrap">
                    <Link to="/" id="header-logo-link">
                      <h1>
                        DN
                      </h1>
                    </Link>
                  </div>
                  <div id="header-right-wrap">
                    <span>{ !isLoggedIn ? '' : this.props.user.email}</span>
                    <Link to='/login'
                          className="toggle-login"
                          id="manage-account-button"
                          onClick={isLoggedIn ? this.logoutUser.bind(this) : () => {}}
                        >
                       { !isLoggedIn ? 'Login' : 'Logout'}
                    </Link>
                    {isLoggedIn ? (
                      <Link to="/feed/new" className="toggle-login" id="new-story-button">
                        <span id="new-story-text">New Story</span>
                      </Link>
                    ) : ''}
                  </div>
               </div>
            </div>
         </header>
      </div>
    );
  };
}

export default withRouter(Header);
