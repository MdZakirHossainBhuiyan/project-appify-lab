import React from 'react';
import './VotingPost.css';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';

const VotingPostBody = () => {
    return (
        <div className='votingContentBody'>
            <p>your favourite game</p>
            <div className='votingOption'>
                <div className='votingContent'>
                    <button className='selectButtonActive'>
                        <DoneOutlinedIcon
                            style={{
                                "fontSize": "15px",
                                "padding": "2px",
                                "color": "#fff",
                                "fontWeight": "bold"
                            }}
                        />
                    </button>
                    <div className='votingOptionTitle'>
                        <p>Added by you</p>
                        <h4>Football</h4>
                    </div>
                </div>
                <div className='voteCount'>
                    <Box>
                        <Avatar style={{width: "25px", height: "25px"}}/>
                    </Box>
                    <p>1 vote</p>
                </div>
                <button className='clearButton'><ClearOutlinedIcon style={{"fontSize": "15px", "padding": "2px", "color": "gray", "fontWeight": "bold"}} /></button>
            </div>

            <div className='votingOption'>
                <div className='votingContent'>
                    <button className='selectButton'><DoneOutlinedIcon style={{"fontSize": "15px", "padding": "2px", "color": "#fff", "fontWeight": "bold"}} /></button>
                    <div className='votingOptionTitle'>
                        <p>Added by you</p>
                        <h4>Cricket</h4>
                    </div>
                </div>
                <button className='clearButton'><ClearOutlinedIcon style={{"fontSize": "15px", "padding": "2px", "color": "gray", "fontWeight": "bold"}} /></button>
            </div>

            <div className='votingOption'>
                <div className='votingContent'>
                    <button className='selectButton'><DoneOutlinedIcon style={{"fontSize": "15px", "padding": "2px", "color": "#fff", "fontWeight": "bold"}} /></button>
                    <div className='votingOptionTitle'>
                        <p>Added by you</p>
                        <h4>Badminton</h4>
                    </div>
                </div>  
                <button className='clearButton'><ClearOutlinedIcon style={{"fontSize": "15px", "padding": "2px", "color": "gray", "fontWeight": "bold"}} /></button>
            </div>
        </div>
    );
};

export default VotingPostBody;