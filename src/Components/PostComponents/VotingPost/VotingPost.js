import React from 'react';
import CommentInputField from '../SharedComponents/CommentInputField/CommentInputField';
import DisplayComments from '../SharedComponents/DisplayComments/DisplayComments';
import UserContent from '../SharedComponents/UserContent/UserContent';
import UserReaction from '../SharedComponents/UserReaction/UserReaction';
import './VotingPost.css';
import VotingPostBody from './VotingPostBody';

const VotingPost = () => {
    return (
        <div className='votingPostCard'>
            <UserContent name="Adnan Chowdhury" time="1 hours" />
            <VotingPostBody />
            <div className='displayCommentCount'>
                <p>1 Comment</p>
            </div>
            <UserReaction />
            <CommentInputField />
            <DisplayComments />
        </div>
    );
};

export default VotingPost;