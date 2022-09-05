import React from 'react';
import './FriendsList.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import profileImage from '../../Image/profileImage.jpg';
import { Avatar, Box } from '@mui/material';

const FriendsList = () => {
    return (
        <div className='friendsListCard'>
            <h5>Your Friends</h5>
            <div className='cardSearchField'>
                <SearchOutlinedIcon style={{zIndex: "1", color: "gray", fontSize: "20px", marginLeft: "10px"}}/>
                <input type="text" />
            </div>
            <div className='friendContent'>
                <Box>
                    <Avatar />
                </Box>
                <div className='friendName'>
                    <h6>admin.</h6>
                </div>
            </div>
            <div className='friendContent'>
                <Box>
                    <Avatar src={profileImage} />
                </Box>
                <div className='friendName'>
                    <h6>Kazi Musharrof Shishir</h6>
                </div>
            </div>
        </div>
    );
};

export default FriendsList;