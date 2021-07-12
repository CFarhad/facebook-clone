import React from 'react'
import Story from './Story'
import './Reels.css'

const story = [
  {id:1,name:"Devon Lane",profile:"https://randomuser.me/api/portraits/men/81.jpg",background:"https://i.pinimg.com/236x/16/05/ee/1605eec2d822f73c5c49745f293d5fa4.jpg"},
  {id:2,name:"Ann Pena",profile:"https://randomuser.me/api/portraits/women/65.jpg",background:"https://i.pinimg.com/236x/30/e5/6b/30e56bf059e432c25d3bf13a688ef579.jpg"},
  {id:3,name:"June Cain",profile:"https://randomuser.me/api/portraits/women/18.jpg",background:"https://i.pinimg.com/236x/02/f1/67/02f167c077bf9a4f37ebb359a75f82a0.jpg"},
  {id:4,name:"Rose Patel",profile:"https://randomuser.me/api/portraits/women/17.jpg",background:"https://i.pinimg.com/236x/2e/28/a4/2e28a4102dd8c9de195e9e7f9d89a765.jpg"},
  {id:5,name:"Rose Patel",profile:"https://randomuser.me/api/portraits/men/57.jpg",background:"https://i.pinimg.com/236x/4b/28/ff/4b28ffe3b186b11bc70760af0b4fc0bb.jpg"},
]
function Reels() {
  return (
    <div className="reels">
      {story.map((item)=>(
        <Story key={item.id} name={item.name} profile={item.profile} background={item.background} />
      ))}
    </div>
  )
}

export default Reels
