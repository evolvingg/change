import React, { Component } from 'react';

import { withRouter } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.navigateToFeed = this.navigateToFeed.bind(this);
  }

  navigateToFeed(e) {
    e.preventDefault();

    this.props.actions.loginUser(this.refs.email.value);
    this.props.router.push('/feed/all');
  }

  render() {
    return (
      <div className="standard-padding" id="register-inner-container">
          <h1 id="register-intro-title">
              Login
          </h1>
          <form acceptCharset="UTF-8" action="/users" className="rte" id="new_user" method="post" onSubmit={this.navigateToFeed}>
              <input type="email" ref="email" className="standard-text-field" id="user_email" name="user[email]" placeholder="Email address" required="required" size="30"/>
              <div className="password-field-wrapper">
                  <input className="standard-text-field" id="user_password" name="user[password]" placeholder="Password" required="required" type="password"/>
              </div>
              <div id="register-form-actions">
                  <input className="standard-button yellow" name="commit" type="submit" value="Show my list!"/>
              </div>
          </form>
      </div>
    );
  }
}

export default withRouter(Login);
