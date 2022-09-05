import React from 'react';
import './Header.css';
import headerLogo from '../../Image/headerLogo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import { Avatar, Box } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Header = () => {
    return (
        <section className='headerSection'>
            <div className='headerLeft'>
                <div className='headerLogo'>
                    <img src={headerLogo} alt="headerLogo"/>
                </div>
                <div className='headerSearchButton'>
                    <SearchIcon
                        style={{
                            color: "gray",
                            zIndex: "1",
                            fontSize: "15px",
                            marginLeft: "30px"
                        }}
                    />
                    <input type="text" className='searchInputField' placeholder='Search'/>
                </div>
            </div>
            <div className='headerRight'>
                <div className='headerIcons'>
                    <button className='headerButtonIcon activeButton'>
                        <HomeOutlinedIcon
                            style={{
                                fontSize: "20px"
                            }}
                        />
                    </button>
                    <button className='headerButtonIcon'>
                        <GroupAddOutlinedIcon
                            style={{
                                fontSize: "20px"
                            }}
                        />
                    </button>
                    <button className='headerButtonIcon'>
                        <NotificationsNoneOutlinedIcon
                            style={{
                                fontSize: "20px"
                            }}
                        />
                    </button>
                    <button className='headerButtonIcon'>
                        <MapsUgcOutlinedIcon
                            style={{
                                fontSize: "20px"
                            }}
                        />
                    </button>
                    
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-around",
                            width: "50%"
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 24,
                                height: 24
                            }}
                        />
                        <span className='userName'>Md Zakir Hossain</span>

                        <KeyboardArrowDownOutlinedIcon
                            style={{
                                color: "#fff",
                                fontSize: "15px"
                            }}
                        />
                    </Box>
                </div>
            </div>
        </section>
    );
};

export default Header;