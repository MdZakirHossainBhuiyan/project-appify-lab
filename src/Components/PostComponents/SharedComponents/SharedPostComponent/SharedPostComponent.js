import React, { useState } from 'react';
import CommentInputField from '../CommentInputField/CommentInputField';
import DisplayComments from '../DisplayComments/DisplayComments';
import DisplayReaction from '../DisplayReaction/DisplayReaction';
import UserContent from '../UserContent/UserContent';
import UserReaction from '../UserReaction/UserReaction';
import './SharedPostComponent.css';

const SharedPostComponent = ({item}) => {
    const {userName, userImage, postTime, postDescription, postImage, postVideo} = item;
    const [displayComments, setDisplayComments] = useState(false);

    const handleDisplayComment = () => {
        displayComments?setDisplayComments(false):setDisplayComments(true);
    }

    return (
        <div className='postComponentCard'>
            <UserContent
                name={userName}
                time={postTime}
                from={userImage}
            />
            {
                userName!=="Sadek Hossain" &&
                <div className='postDescription'>
                    <p>{postDescription}</p>
                </div>
            }
            {
                userName==="Sadek Hossain" &&
                <div className='descriptionBackground'>
                    <p>{postDescription}</p>
                </div>
            }
            {
                postImage &&
                <div className='postImage'>
                    <img src={postImage} width="100%" alt="postImage" />
                </div>
            }
            <div className='postVideo'>
                {postVideo}
            </div>
            <DisplayReaction />
            <UserReaction />

            <div className='moreCommentButton'>
                <button onClick={() => handleDisplayComment()}>{displayComments?'Hide Comment':'View more comments'}</button>
            </div>

            <CommentInputField />
            <div>
                {
                    displayComments && <DisplayComments />
                }
            </div>
        </div>
    );
};

export default SharedPostComponent;