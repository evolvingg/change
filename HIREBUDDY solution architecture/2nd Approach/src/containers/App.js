import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../action-creators';

import PageWrapper from './PageWrapper';
import Header from '../components/Header';

const mapStateToProps = state => ({
  feed: state.feed,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

class App extends React.Component {
  render() {
    return (
      <div>
        <Header {...this.props}/>
        <div className="feed-wrapper">
          <div id="page-container" className="wrap padded has-sidebar">
            <div id="page-main-content">
              <div id="page-main-content-inner" role="main">
                { React.cloneElement(this.props.children, this.props) }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
