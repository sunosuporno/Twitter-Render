import React from 'react'
import Avatar from './Avatar'
import Author from './Author'
import Time from './Time'
import Message from './Message'
import LikeButton from './LikeBtn'
import RetweetButton from './RetweetBtn'
import ReplyButton from './ReplyBtn'

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);

function TweetListItem({ tweet }) {
    return (
        <div className="single-tweet">
            <div className="user-info">
                <Avatar hash={tweet.gravatar} />

                <Author author={tweet.author} />
                <Time timestamps={tweet.timestamp} />
            </div>
            <Message texts={tweet.message} />
            <div className="buttons">
                <ReplyButton />
                <RetweetButton count={tweet.retweets} />
                <LikeButton count={tweet.likes} />
                <MoreOptionsButton />
            </div>
        </div>
    )
}

export default TweetListItem