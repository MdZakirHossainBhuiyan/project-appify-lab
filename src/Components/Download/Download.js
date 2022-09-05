import React from 'react';
import './Download.css';
import playStore from "../../Image/Download_App_store.png";
import googlePlay from "../../Image/google-play.png";

const Download = () => {
    return (
        <div className='downloadCard'>
            <h5>Download App</h5>
            <div className='downloadCardContent'>
                <img src={playStore} alt="playStore" />
                <img src={googlePlay} alt="googlePlay" />
            </div>
        </div>
    );
};

export default Download;