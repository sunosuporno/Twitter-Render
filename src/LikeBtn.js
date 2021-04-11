import React from 'react'

const LikeButton = ({ count }) => ( 
    <span className="like-button">
    <i className="fa fa-heart"/>
    {count > 0 &&
    <span className="like-count">
    {count} </span>}
    </span>
    );
export default LikeButton