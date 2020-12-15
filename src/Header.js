import React from 'react'
import "./Header.css"
import FlagSharpIcon from '@material-ui/icons/FlagSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import SearchIcon from '@material-ui/icons/Search';
import StoreSharpIcon from '@material-ui/icons/StoreSharp';
import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
import ForumSharpIcon from '@material-ui/icons/ForumSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import NotificationsPausedSharpIcon from '@material-ui/icons/NotificationsPausedSharp';
import {Avatar,IconButton} from "@material-ui/core";
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import {useStateValue} from './StateProvider'
function Header() {
  const [{user}]=useStateValue();
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512" alt=""/>
            <div className="header__input">
            <SearchIcon/>
            <input type="text" placeholder="Search Facebook" />
            </div>
            </div>
            <div className="header__middle">
                <div className="header__option--active">
                    <HomeSharpIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <FlagSharpIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <StoreSharpIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleSharpIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <PlayArrowSharpIcon fontSize="large"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                    <IconButton>
                        <AddSharpIcon/>
                    </IconButton>
                    <IconButton>
                        <NotificationsPausedSharpIcon/>
                    </IconButton>
                    <IconButton>
                        <ForumSharpIcon/>
                    </IconButton>
                    <IconButton>
                        <ExpandMoreSharpIcon/>
                    </IconButton>
                </div>

            </div>
            
        </div>
    )
}

export default  Header