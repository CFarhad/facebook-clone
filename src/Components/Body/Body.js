import React from 'react';
import Profile  from './Sidebar/Profile'
import Messenger from './Sidebar/Messenger';
import Reels from './StoryReels/Reels'
import Sender from './Sender'
import Posts from './Posts'
import Events from './Events'
import Viewed from './Sidebar/Viewed';
import { Container, Grid } from '@material-ui/core';
import {connect} from 'react-redux'
import './Body.css'

function Body(props) {
  let {user} = props;
  return (
    <div style={{marginTop: "20px"}}>
      <Container maxWidth="xl" >
        <Grid container spacing={5}>
          <Grid item xs>
            <div className="sidebar">
              <Profile image={user.photoURL} name={user.displayName} />
            </div>
            <div className="sidebar" style={{marginTop: "10px"}}>
              <Messenger />
            </div>
            <div className="sidebar" style={{marginTop: "10px"}}>
              <Viewed />
            </div>
          </Grid>
          <Grid item xs={7}>
              <Reels />
              <div style={{marginTop: "30px"}}>
                <Sender />
              </div>
              <div style={{marginTop: "15px"}}>
                <Posts />
              </div>
          </Grid>
          <Grid item xs>
            <div className="events">
              <Events />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = state=>{
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Body);
