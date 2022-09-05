import React from 'react';
import './UserReaction.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

const UserReaction = () => {
    return (
        <div className='reactionArea'>
            <div className='reactionType'>
                <button><ThumbUpOutlinedIcon style={{"fontSize": "18px", "marginRight": "10px"}} /> Like</button>
            </div>
            <div className='reactionType'>
                <button><ChatBubbleOutlineOutlinedIcon style={{"fontSize": "18px", "marginRight": "10px"}} /> Comment</button>
            </div>
            <div className='reactionType'>
                <button><ReplyOutlinedIcon style={{"fontSize": "18px", "marginRight": "10px", "transform": "scaleX(-1)"}} /> Share</button>
            </div>
        </div>
    );
};

export default UserReaction;