import React from 'react';
import './Explore.css';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';

const Explore = () => {
    return (
        <div className='exploreCard'>
            <h5>Explore</h5>
            <div className='exploreCardLists'>
                <FeedOutlinedIcon />
                <p>Saved Post</p>
            </div>
            <div className='exploreCardLists'>
                <PersonOutlineOutlinedIcon />
                <p>People</p>
            </div>
            <div className='exploreCardLists'>
                <PeopleAltOutlinedIcon />
                <p>Groups</p>
            </div>
            <div className='exploreCardLists'>
                <WebOutlinedIcon />
                <p>Pages</p>
            </div>
            <div className='exploreCardLists'>
                <EventOutlinedIcon />
                <p>Events</p>
            </div>
        </div>
    );
};

export default Explore;