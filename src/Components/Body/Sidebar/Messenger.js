import React from 'react'
import {Typography} from '@material-ui/core'
import UserMessage from './UserMessage'
import './Messenger.css'


const users = [
  {id:1,name:"Devon Lane",image:"https://randomuser.me/api/portraits/men/81.jpg",activity:"online"},
  {id:2,name:"Ann Pena",image:"https://randomuser.me/api/portraits/women/65.jpg",activity:"idle"},
  {id:3,name:"June Cain",image:"https://randomuser.me/api/portraits/women/18.jpg",activity:"doNotDisturb"},
  {id:4,name:"Rose Patel",image:"https://randomuser.me/api/portraits/women/17.jpg",activity:"invisible"},
]

function Messenger() {
  return (
    <div>
      <div className="messenger__header">
        <Typography>Messenger</Typography>
        <Typography style={{color: "#2e81f4"}}>All</Typography>
      </div>
      <div className="messenger__users">
        {users.map((item)=>(
          <UserMessage key={item.id} name={item.name} image={item.image} activity={item.activity} />
        ))}
      </div>
    </div>
  )
}

export default Messenger
