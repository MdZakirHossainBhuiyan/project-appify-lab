import React from 'react';
import './SuggestedPeople.css';
import profileImage from '../../Image/profileImage.jpg';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const SuggestedPeople = () => {
    return (
        <div className='suggestedPeopleCard'>
            <h5>Suggested People</h5>
            <div className='suggestedPeopleContent'>
                <img src={profileImage} alt="profileImage" />
                <h6>Sadek Hossain</h6>
                <button>Add <AddOutlinedIcon style={{fontSize: "10px"}}/></button>
            </div>
        </div>
    );
};

export default SuggestedPeople;