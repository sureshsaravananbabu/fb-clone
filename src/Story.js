import React from 'react'
import {Avatar} from "@material-ui/core";
import './Story.css'
function Story(props) {
    return (
        <div style={{backgroundImage:`url(${props.image})` }} className="story">
            <Avatar className="story__avatar" src={props.profileSrc}/>
            <h4>{props.title}</h4>
        </div>
    )
}

export default Story
