import { Avatar, Box } from '@mui/material';
import React from 'react';
import './CreatePost.css';
import ContrastIcon from '@mui/icons-material/Contrast';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

const CreatePost = () => {
    return (
        <div className='createPostArea'>
            <div className='inputFieldArea'>
                <Box>
                    <Avatar />
                </Box>
                <input type="text" placeholder='Create a new posts...' />
            </div>
            <hr className='borderLine' />
            <div className='postOptions'>
                <div className='optionItems'>
                    <ContrastIcon
                        style={{
                            "fontSize": "16px",
                            "marginRight": "10px"
                        }}
                    />
                    <p>Background</p>
                </div>
                <div className='optionItems'>
                    <CameraAltOutlinedIcon
                        style={{
                            "fontSize": "16px",
                            "marginRight": "10px"
                        }}
                    />
                    <p>Photo/Video</p>
                </div>
                <div className='optionItems'>
                    <SentimentSatisfiedOutlinedIcon
                        style={{
                            "fontSize": "16px",
                            "marginRight": "10px"
                            }}
                        />
                    <p>Feeling/Activity</p>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;