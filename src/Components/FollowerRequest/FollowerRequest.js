import { Avatar, Box } from '@mui/material';
import React from 'react';
import './FollowerRequest.css';

const FollowerRequest = () => {
    return (
        <div className='followerRequestCard'>
            <h5>You Might Like</h5>
            <hr className='borderLine'/>
            <div className='followerRequestList'>
                <Box>
                    <Avatar />
                </Box>
                <div className='followerInfo'>
                    <h6>sadfa</h6>
                    <p>sfdasd</p>
                </div>
            </div>
            <div className='cardButtons'>
                <button className='ignoreButton'>Ignore</button>
                <button className='followButton'>Follow</button>
            </div>
        </div>
    );
};

export default FollowerRequest;