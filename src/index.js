import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TweetListItem from './Content'

const testTweets = [{
  id: 1,
  message: "something about cats",
  gravatar: "3cf54997ff0b0c2cd6c2a0ed916558b9",
  author: {
    handle: "catperson",
    name: "IAM A catperson"
  },
  likes: 2,
  retweets: 3,
  timestamp: "2016-07-30 21:24:37"
},
{
  id: 2,
  message: "something about startups",
  gravatar: "3cf54997ff0b0c2cd6c2a0ed916558b9",
  author: {
    handle: "sunosuporno",
    name: "Suporno"
  },
  likes: 10,
  retweets: 2,
  timestamp: "2016-08-30 21:24:37"
},
{  id: 3,
  message: "something about Elon Musk",
  gravatar: "3cf54997ff0b0c2cd6c2a0ed916558b9",
  author: {
    handle: "sunosuporno",
    name: "Suporno"
  },
  likes: 40,
  retweets: 4,
  timestamp: "2016-08-15 21:24:37"
},
{  id: 4,
  message: "something about the tech future",
  gravatar: "3cf54997ff0b0c2cd6c2a0ed916558b9",
  author: {
    handle: "sunosuporno",
    name: "Suporno"
  },
  likes: 1009,
  retweets: 60,
  timestamp: "2019-08-30 21:24:37"
},
{  id: 5,
  message: "something about my startup",
  gravatar: "3cf54997ff0b0c2cd6c2a0ed916558b9",
  author: {
    handle: "sunosuporno",
    name: "Suporno"
  },
  likes: 10900,
  retweets: 1030,
  timestamp: "2020-08-30 21:24:37"
}]

function TweetList({ tweets }) {
  return (
    <div className='tweet'>
      {tweets.map(tweet => (
        <TweetListItem key={tweet.id} tweet={tweet} />
      ))}
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <TweetList tweets={testTweets} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

