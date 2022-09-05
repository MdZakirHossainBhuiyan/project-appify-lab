import React from 'react';
import './DisplayComments.css';
import CommentBody from './CommentBody';
import CommentInputField from '../CommentInputField/CommentInputField';

const DisplayComments = () => {
    return (
        <div>
            <CommentBody type="image" time="54 minutes" />
            <div className='replyComment'>
                <CommentBody type="hlo" time="1 second" />
                <CommentInputField />
            </div>
        </div>
    );
};

export default DisplayComments;