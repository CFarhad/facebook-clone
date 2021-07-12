import React from 'react'
import {IconButton, Typography} from '@material-ui/core'
import {MoreHorizRounded , ThumbUpAltRounded , ThumbDownAltRounded} from '@material-ui/icons'
import './Post.css'

function Post({profile,name,image,content,timestamp}) {
  return (
    <div className="Post">
      <div className="Post__header">
        <div className="Post__account">
          <img className="" src={profile} />
          <div className="Post__more">
            <Typography variant="body1">{name ? name : ""}</Typography>
            <Typography variant="subtitle2">{new Date(timestamp?.toDate()).toUTCString()}</Typography>
          </div>
        </div>
        <IconButton>
          <MoreHorizRounded />
        </IconButton>
      </div>
      <div className="Post__content">
        <Typography style={{marginBottom: "20px"}}>{content ? content : ""}</Typography>
        {image ? <img className="Post__media" src={image} alt="Image Media" /> : ""}
      </div>
      <div className="Post__footer" style={{marginTop: "20px"}}>
        <IconButton style={{marginRight: "10px"}}>
          <ThumbUpAltRounded />
        </IconButton>
        <IconButton >
          <ThumbDownAltRounded />
        </IconButton>
      </div>
    </div>
  )
}

export default Post
