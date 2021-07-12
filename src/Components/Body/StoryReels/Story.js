import { Typography } from '@material-ui/core'
import React from 'react'
import './Story.css'

function Story({background,name,profile}) {
  return (
    <div className="story" style={{backgroundImage: `url(${background})`}}>
      <div className="story__info">
        <img className="story__profile" src={profile} alt="story profile" />
        <Typography variant="body1" style={{color: "white"}}>{name}</Typography>
      </div>
    </div>
  )
}

export default Story
