import React from 'react';
import './DisplayReaction.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const DisplayReaction = () => {
    return (
        <div className='displayReactionArea'>
            <div className='reactionCountArea'>
                <div className='reactionsIcon'>
                    <ThumbUpIcon
                        style={{
                            "fontSize": "14px",
                            "color": "#fff",
                        }}
                    />
                </div>
                <p>3</p>
            </div>
            <div className='displayTotalComment'>
                <p>1 Comment</p>
            </div>
        </div>
    );
};

export default DisplayReaction;