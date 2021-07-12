import React from 'react';
import { Typography , IconButton} from '@material-ui/core';
import {MoreHorizRounded} from '@material-ui/icons'
import './index.css';

function index() {
  return (
    <div>
      <div className="Event__header">
        <Typography>Events</Typography>
        <IconButton>
          <MoreHorizRounded />
        </IconButton>
      </div>
      <div className="Event__banner">
        <Typography style={{ color: 'white', marginLeft: '10px' }}>
          Great Party
        </Typography>
        <Typography style={{ color: '#969696', marginLeft: '10px' }}>
          Only ibiza boat party
        </Typography>
      </div>
      <div className="Event__content">
        <div className="Event__header" style={{marginBottom: "20px"}}>
          <Typography>Recently Event</Typography>
          <Typography style={{ color: '#2e81f4' }}>All</Typography>
        </div>
        <div className="content" style={{marginTop: "10px"}}>
          <img src="https://i.pinimg.com/236x/71/e4/1a/71e41a630fe2f13091294038916552ea.jpg" />
          <div >
            <Typography variant="body1">Save the Museum</Typography>
            <Typography variant="subtitle2">10 des 2020</Typography>
          </div>
        </div>
        <div className="content" style={{marginTop: "10px"}}>
          <img src="https://i.pinimg.com/236x/57/f8/2f/57f82fca5964fbbcc440f0cf7f0cad05.jpg" />
          <div >
            <Typography variant="body1">Friends Meeting</Typography>
            <Typography variant="subtitle2">12 des 2020</Typography>
          </div>
        </div>
        <div className="content" style={{marginTop: "10px"}}>
          <img src="https://i.pinimg.com/236x/a7/fb/a9/a7fba9daddfa6124bfa3b2e00eafd0aa.jpg" />
          <div >
            <Typography variant="body1">Breakfast by the sea</Typography>
            <Typography variant="subtitle2">18 des 2020</Typography>
          </div>
        </div>
        <div className="content" style={{marginTop: "10px"}}>
          <img src="https://i.pinimg.com/236x/bd/3f/bf/bd3fbf14da39397b8a4e250f3199164c.jpg" />
          <div >
            <Typography variant="body1">Tea Ceremony</Typography>
            <Typography variant="subtitle2">28 des 2020</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
