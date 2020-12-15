import React, { useState, useEffect } from 'react';
import StoryReel from './StoryReel'
import './Feed.css'
import Post from './Post'
import MessageSender from './messageSender'
import db from './firebase'

function Feed() {
    const [posts,setposts]=useState([])
    useEffect(() => {
        db.collection('Posts').onSnapshot((snapshot)=>
            setposts(snapshot.docs.map((doc)=>({ id:doc.id,data:doc.data() })) 
        ))
      
    },[])
    console.log(posts)
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            {posts.map((post)=>(
                <Post key={post.id}  profilepic={post.data.profilePic}  message={post.data.message}  timestamp={post.data.timestamp}  username={post.data.username} image={post.data.image}/>
            ))}
        </div>
    )
}

export default Feed
