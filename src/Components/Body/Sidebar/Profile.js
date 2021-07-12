import React from 'react';
import { AccountCircleRounded, SettingsRounded } from '@material-ui/icons';
import { Typography, IconButton } from '@material-ui/core';
import './Profile.css';


function Profile({image,name}) {
  return (
    <div className="profile">
      {image ? <img src={image} alt="profile picture" /> : <AccountCircleRounded fontSize="large" />}
      <div className="username">
        <Typography variant="body1">{name}</Typography>
        <IconButton className="settingIcon" >
          <SettingsRounded />
        </IconButton>
      </div>
    </div>
  );
}



export default Profile;
