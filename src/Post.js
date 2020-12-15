import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Post(props) {
    return (
        <div className="Post">
            <div className="Post__top">
                <Avatar src={props.profilepic} className="Post__avatar"/>
                <div className="post__topInfo">
                    <h3>{props.username}</h3>
                    <p>{props.timestamp.toDate().toDateString()}</p>
                </div>
            </div>
            <div className="Post__bottom">
                <p>{props.message}</p>
            </div>

            <div className="Post__image">
                <img src={props.image} alt=""/>
            </div>


            <div className="Post__options">
                <div className="Post__option">
                <ThumbUpIcon/>
                <p>Like</p>
                </div>
                <div className="Post__option">
                <ChatBubbleIcon/>
                <p>Comment</p>
                </div>
                <div className="Post__option">
                <ShareIcon/>
                <p>Share</p>
                </div>
                <div className="Post__option">
                <AccountCircleIcon/>
                <ExpandMoreIcon/>
                </div>
            </div>
            


        </div>
    )
}

export default Post
