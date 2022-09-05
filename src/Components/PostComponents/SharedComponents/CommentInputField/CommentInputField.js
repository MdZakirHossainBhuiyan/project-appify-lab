import { Avatar, Box } from '@mui/material';
import React from 'react';
import './CommentInputField.css';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GifBoxIcon from '@mui/icons-material/GifBox';
import SendIcon from '@mui/icons-material/Send';

const CommentInputField = () => {
    return (
        <div className='commentFieldArea'>
            <div className='userAvatar'>
                <Avatar />
            </div>
            <div className='inputField'>
                <button><EmojiEmotionsIcon style={{"fontSize": "20px", "color": "gray"}} /></button>
                <button className='iconStyle'><AttachFileIcon style={{"fontSize": "20px", "color": "gray"}} /></button>
                <button><GifBoxIcon style={{"fontSize": "20px", "color": "gray"}} /></button>
                <input type="text" placeholder='Write a comment...' />
                <button className='sendIconStyle'><SendIcon style={{"fontSize": "20px", "color": "gray"}}/></button>
            </div>
        </div>
    );
};

export default CommentInputField;