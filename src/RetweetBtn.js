import React from 'react'

function getRetweetCount(count) {
    if (count > 0) {
      return (
        <span className="retweet-count">
          {count}
        </span>
      );
    } else {
      return null;
    }
  }
  
const RetweetButton = ({ count }) => (
    <span className="retweet-button">
 <i className="fa fa-retweet"/>
     {getRetweetCount(count)}
 </span>
 );

export default RetweetButton