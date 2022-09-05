import React from 'react';
import './UserContent.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Box } from '@mui/material';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import profilePic from '../../../../Image/updated.jpg';

const UserContent = ({name, time, from}) => {
    return (
        <div className='userContentArea'>
            <div className='userContent'>
                <Box sx={{"padding": "0px", "margin": "0px"}}>
                    {
                        (!from) &&
                        <Avatar style={{"width": "30px", "height": "30px"}} />
                    }
                    {
                        (from==="updatePost") && 
                        <Avatar style={{"width": "30px", "height": "30px"}} src={profilePic} />
                    }
                    {
                        (from && from!=="updatePost") && 
                        <Avatar style={{"width": "30px", "height": "30px"}} src={from} />
                    }
                </Box>
                <div className='userInfo'>
                    <h5>
                        {name}
                        {
                            (from==="gallery") && 
                            <span>&#128512; is feeling ok</span>
                        }
                        {
                            (from==="updatePost") && 
                            <span>updated her profile picture</span>
                        }
                    </h5>
                    <p>
                        {time} ago 
                        <LanguageOutlinedIcon
                            style={{
                                "fontSize": "15px",
                                "marginLeft": "10px"
                            }}
                        />
                    </p>
                </div>
            </div>
            <div className='downButton'>
                <button><KeyboardArrowDownIcon /></button>
            </div>
        </div>
    );
};

export default UserContent;