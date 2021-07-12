import React from 'react'
import {AccountCircleRounded , FiberManualRecordRounded} from '@material-ui/icons'
import {Typography} from '@material-ui/core'
import './UserMessage.css'


function UserMessage({image,activity,name}) {
  const checkActivity = (activity)=>{
    switch (activity) {
      case "online":
       return "#10B981"
      case "idle":
        return "#F59E0B"
      case "doNotDisturb":
        return "#EF4444"
      case "invisible":
        return "#6B7280"
      default:
        return "#6B7280"
    }
  }
  return (
    <div className="UserMessage">
      {image ? <img src={image} alt="profile picture" /> : <AccountCircleRounded fontSize="large" />}
      <div className="UserMessage__account">
        <Typography variant="body2" style={{cursor:"pointer"}}>{name}</Typography>
        <FiberManualRecordRounded fontSize="small" style={{color: checkActivity(activity)}} />
      </div>
    </div>
  )
}

export default UserMessage
