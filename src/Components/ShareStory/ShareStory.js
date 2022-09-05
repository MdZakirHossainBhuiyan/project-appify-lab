import React from 'react';
import './ShareStory.css';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Avatar } from '@mui/material';
import storyImage from "../../Image/story.jpg";

const ShareStory = () => {
    return (
        <div className='shareStoryArea'>
            <div className='storyCard createStoryCard'>
                <div className='createButton'>
                    <button><AddOutlinedIcon style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "15px"}} /></button>

                    <p>Your Story</p>
                </div>
            </div>
            <div className='storyCard displayStory'>
                <Avatar style={{"width": "25px", "height": "25px", "marginLeft": "80px", "marginTop": "10px"}} />
                <img src={storyImage} alt="storyImage" />
                <h5>Adnan Chowdhury</h5>
            </div>
        </div>
    );
};

export default ShareStory;