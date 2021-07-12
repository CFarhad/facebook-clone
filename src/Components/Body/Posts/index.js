import React, { useEffect, useState } from 'react';
import Post from './Post';
import db from '../../Config/firebase'

function Index() {
  const [posts , setPosts] = useState([])
  useEffect(()=>{
    db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map((doc)=>({id: doc.id,data:doc.data()})))
    })
  },[])
  return (
    <div>
      {posts.map((post)=>(
        <Post id={post.id} image={post.data.media} content={post.data.message} timestamp={post.data.timestamp} profile={post.data.profilePic} />
      ))}
    </div>
  );
}

export default Index;
