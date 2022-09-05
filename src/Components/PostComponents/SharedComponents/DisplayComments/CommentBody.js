import React from 'react';
import './DisplayComments.css';
import commentImage from '../../../../Image/9atw6.jpg';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Avatar, Box } from '@mui/material';

const CommentBody = ({type, time}) => {
    return (
        <div className='displayCommentsArea'>
            <Box>
                <Avatar />
            </Box>
            <div className='displayCommentContent'>
                <div className='commentContent'>
                    <div className='commentImage'>
                        <h6>Adnan Chowdhury</h6>
                        {
                            (type==="image")?<img src={commentImage} alt="commentImage" />
                            :
                            <p>{type}</p>
                        }
                    </div>
                    <div className='threeDotOption'>
                        <button><MoreHorizOutlinedIcon /></button>
                    </div>
                </div>
                <div className='commentReaction'>
                    <button>Like</button>
                    {
                        (type==="image") && <button>Reply</button>
                    }
                    <p className='oneDot'>.</p>
                    <p>{time} ago</p>
                </div>
            </div>
        </div>
    );
};

export default CommentBody;