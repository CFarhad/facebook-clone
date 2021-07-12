import React from 'react'
import { Button , Grid, TextField, Typography } from '@material-ui/core'
import {auth , provider} from '../Config/firebase'
import { connect } from 'react-redux'
import { SetUser } from '../../Action'
import './index.css'

function index(props) {
  let {SetUser} = props;
  const signInGoogle = ()=>{
    auth.signInWithRedirect(provider)
    .then(result=>{
      SetUser(result.user)
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
  // const signInGithub = ()=>{
  //   auth.signInWithPopup(GithubProvider)
  //   .then(result=>{
  //     SetUser(result.user)
  //   })
  //   .catch(error=>{
  //     console.log(error.message)
  //   })
  // }
  return (
    <div className="login">
      <Grid container>
        <Grid item xs={6} style={{background: "#2e81f4",display:"grid",placeItems:"center", height: "100vh"}}>
          <div>
            <Typography style={{color: "white"}} variant="h2">facebook</Typography>
          </div>
          <div>
            <Typography variant="h4" style={{maxWidth: "270px",color: "white"}}>Connect with friends and the world around you</Typography>
          </div>

        </Grid>
        <Grid item xs={6} style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}}>
          <form className="login__form">
            <button className="btn btn-google" onClick={signInGoogle}>Google</button>
            <button className="btn btn-github">Github</button>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

const mapDispatchToProps = dispatch=>{
  return {
    SetUser: user=>dispatch(SetUser(user))
  }
}

export default connect(null,mapDispatchToProps)(index)
