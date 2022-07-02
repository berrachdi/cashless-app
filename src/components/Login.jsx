import React, { Component } from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {Grid, Typography,Paper, Avatar, TextField, Checkbox,Button,FormControlLabel, Link} from '@material-ui/core'
import axios from 'axios'
import Home from './Home'
import { Navigate } from 'react-router-dom'




export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authData:{
                carNumber: props.carNumber,
                password: props.password
            },
            clientData:{
                carNumber: props.carNumber,
                fullName: props.fullName,
                phoneNumber: props.phoneNumber,
                validateAccount: props.validateAccount,
                access_token: props.access_token


            }
        }

        
        var access_token = localStorage.getItem('access_token');
        if(access_token == undefined) {
            console.log('login is required')
        }else{
            
            console.log("You're access token equals: " + access_token)
            var clientData = this.state.clientData
            clientData.access_token = access_token

            this.setState({
                clientData: clientData
              });
            
            
        }

    }

    carChange(event){
        var authData = this.state.authData;
  
        // Extract the value of the input element represented by `target`
        var modifiedValue = event.target.value;
      
        // Update the customer object's first name
        authData.carNumber = modifiedValue;
      
        // Update the state object
        this.setState({
          authData: authData
        });
        console.log(this.state.authData)
    }
    passwordChange(event){
        var authData = this.state.authData;
  
        // Extract the value of the input element represented by `target`
        var modifiedValue = event.target.value;
      
        // Update the customer object's first name
        authData.password = modifiedValue;
      
        // Update the state object
        this.setState({
            authData: authData
        });

    }
    btnLogin(event){
        axios.get('http://localhost:5000/login', {
            params: {
              ps: this.state.authData.password,
              cn:this.state.authData.carNumber
            }
          })
          .then(function (response) {
            console.log(response.data.access_token);
            localStorage.setItem('access_token',response.data.access_token);
            this.render()
            return response.data
            
          })

    }
    
  render() {
    
    const avatarStyle = {backgroundColor:'#e79702'}
    const  paperStyle = {padding:10,height:'70vh',width:280,margin:"20px auto"}
    const btnStyle={margin:'8px 0'}
    const gridStyle = {margin:'10px 0'}
    const access_token = this.state.clientData.access_token

    if(access_token == undefined){
        console.log("BOOOOOOOOOOOOOOOOM")
        return (
        
            
    
       
            <Grid>
              <Paper elevation={10} style={paperStyle}>
                  
                      <Grid align="center">
                          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                          <Typography variant='h5' >Sign in</Typography>
      
                      </Grid>
                      <Grid style={gridStyle}>
                          <TextField  label='Car number' placeholder='Enter car number' fullWidth required onChange={this.carChange.bind(this)}/>
                      
      
                      </Grid>
                      <Grid style={gridStyle}>
                          <TextField label='Password' placeholder='Enter password' type='password' fullWidth required onChange={this.passwordChange.bind(this)}/>
                      </Grid>
                      <Grid style={gridStyle}>
                          <FormControlLabel 
                              control={
                                  <Checkbox
                                      name="checkbox"
                                      color="#e79702"
                                  />
                              } 
                              label='remember me'               
                          />
      
                      
                      </Grid>
                      <Grid style={gridStyle}>
                          <Button fullWidth style={btnStyle} color='primary' variant='contained' onClick={this.btnLogin.bind(this)}>Sign in</Button>
                      </Grid>
                  
                  <Grid>
                      <Typography style={gridStyle}>
                          <Link href='#'>Forgot password?</Link>
                      </Typography>
                      <Typography style={gridStyle}>Do you have an account?
                          <Link href='#'>Sign up</Link>
                      </Typography>
                  </Grid>
                  
                  
                  
              </Paper>
            </Grid>
          )
    }else{

        return <Navigate to="/home" replace={true} />

    }

    

    
  }
}
