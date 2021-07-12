import React, { useState } from 'react';
import { VideocamRounded , PhotoLibraryRounded , InsertEmoticonRounded} from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import {connect} from 'react-redux'
import firebase from 'firebase'
import db from '../../Config/firebase';
import './index.css';

function Index(props) {
  const [content , setContent] = useState("")
  const [media , setMedia] = useState("")
  const {user} = props;
  
  const handleSubmit = (e)=>{
    e.preventDefault()  
    db.collection("posts").add({
      message: content,
      profilePic: user.photoURL,
      media,
      username: user.displayName,
      timestamp:  firebase.firestore.FieldValue.serverTimestamp()
    })
    setContent("")
    setMedia("")
  }

  return (
    <div className="sender">
      <div className="sender__header">
        <img
          src="https://avatars.githubusercontent.com/u/44419462?v=4"
          alt="profile picture"
        />
        <form className="sender__content" onSubmit={handleSubmit}>
          <input placeholder="Write everything ..." onChange={(e)=>setContent(e.target.value)} />
          <input placeholder="image URL (optional)" onChange={(e)=>setMedia(e.target.value)}/>
          <button style={{display: "none"}} type="submit"></button>
        </form>
      </div>
      <div className="sender__footer">
        <div className="sender__external">
          <div>
            <VideocamRounded style={{ color: '#EF4444' }} />
          </div>
          <Typography>Live Video</Typography>
        </div>
        <div className="sender__external">
          <div>
            <PhotoLibraryRounded style={{ color: '#10B981' }} />
          </div>
          <Typography>Photo/Video</Typography>
        </div>
        <div className="sender__external">
          <div>
            <InsertEmoticonRounded style={{ color: '#F59E0B' }} />
          </div>
          <Typography>Felling/Activity</Typography>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state=>{
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Index);
