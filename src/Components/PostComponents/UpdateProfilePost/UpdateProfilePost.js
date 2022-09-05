import React from 'react';
import UserContent from '../SharedComponents/UserContent/UserContent';
import './UpdateProfilePost.css';
import profilePic from '../../../Image/updated.jpg';
import UserReaction from '../SharedComponents/UserReaction/UserReaction';
import CommentInputField from '../SharedComponents/CommentInputField/CommentInputField';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const UpdateProfilePost = () => {
    return (
        <div className='UpdateProfilePostCard'>
            <UserContent
                name="alfred parchment"
                time="17 days"
                from="updatePost"
            />
            <div className='profilePic'>
                <img src={profilePic} width="100%" alt="profilePic" />
            </div>
            <div className='reactionCount'>
                <div className='reactionCountIcon'>
                    <ThumbUpIcon
                        style={{
                            "fontSize": "14px",
                            "color": "#fff",
                        }}
                    />
                </div>
                <p>3</p>
            </div>
            <UserReaction />
            <CommentInputField />
        </div>
    );
};

export default UpdateProfilePost;