import React from 'react'
import { IconButton, Typography } from '@material-ui/core'
import { MoreHorizRounded } from '@material-ui/icons'
import './Viewed.css'

function Viewed() {
  return (
    <div className="Viewed">
      <div className="Viewed__header">
        <Typography>Recently Viewed</Typography>
        <IconButton>
          <MoreHorizRounded />
        </IconButton>
      </div>
      <div className="Viewed__content">
        <div className="content">
          <img src="https://i.pinimg.com/236x/d7/68/f0/d768f0af98e01aefb1af88a065a2095b.jpg" alt="content image" />
        </div>
        <div className="content">
          <img src="https://i.pinimg.com/236x/7d/2e/0c/7d2e0c0e2d23d8cb942888cb7ae0d433.jpg" alt="content image" />
        </div>
        <div className="content">
          <img src="https://i.pinimg.com/236x/87/93/36/8793364b6e627c0e6b32dc1236c8e091.jpg" alt="content image" />
        </div>
        <div className="content">
          <img src="https://i.pinimg.com/236x/f9/e3/ed/f9e3edc8c32ed7c96a50f796e8ecc18c.jpg" alt="content image" />
        </div>
        <div className="content">
          <img src="https://i.pinimg.com/236x/af/aa/e0/afaae09cb5a48fb2719d4d947df86094.jpg" alt="content image" />
        </div>
        <div className="content">
          <img src="https://i.pinimg.com/236x/80/04/ae/8004ae5404f8be610f1cbdbe98026b47.jpg" alt="content image" />
        </div>
      </div>
    </div>
  )
}

export default Viewed
