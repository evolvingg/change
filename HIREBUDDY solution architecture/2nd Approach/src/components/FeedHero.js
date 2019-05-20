import React from 'react';

class FeedHero extends React.Component {
  render() {
    return (
      <header id="frontpage-welcome-hero" className="montana-hero">
        <div className="montana-hero-info">
          <h2>Designer News <span>is where the design community meets.</span></h2>
        </div>
        <div className="montana-hero-prompt-container"><a href="/signup" className="standard-button green montana-hero-prompt-button">Join us</a></div>
      </header>
    );
  }
}

export default FeedHero;
