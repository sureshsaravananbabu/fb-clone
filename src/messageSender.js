import { Avatar } from '@material-ui/core'
import React,{useState}from 'react'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/EmojiEmotions';
import {useStateValue} from './StateProvider'
import db from './firebase'
import firebase from 'firebase/app'
import 'firebase/firestore';
import './messageSender.css'
function MessageSender() {
    console.log(firebase.firestore.Timestamp.now())
    const [input,setinput]= useState('') 
    const [imgURL,setimgURL]= useState('') 
    const [{user}]=useStateValue();
    console.log(user.photoURL)
    const handlesubmit=(e)=>{
        e.preventDefault();
        db.collection('Posts').add({
            message:input,
            timestamp:firebase.firestore.Timestamp.now(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imgURL
        })
        setimgURL("");
        setinput("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input  onChange={(e) => setinput(e.target.value)} value={input} className="messageSender__input" placeholder={`what on your mind,${user.displayName}?`}/>
                    <input value={imgURL} onChange={(e) => setimgURL(e.target.value)}  placeholder="image URL (optional)"/>
                    <button onClick={handlesubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>


            </div>
            
        </div>
    )
}

export default MessageSender
