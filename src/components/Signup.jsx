import React, { Component } from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import GroupAddOutlined from '@material-ui/icons/GroupAddOutlined';
import axios from 'axios'
import {Grid, Typography,Paper, Avatar, TextField, Checkbox,Button,FormControlLabel, Link} from '@material-ui/core'
export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authData:{
                carNumber: props.carNumber,
                password: props.password
            },
            clientData:{
                carnumber: props.carnumber,
                fullname: props.fullname,
                phonenumber: props.phonenumber,
                validate: props.validate,
                password: props.password


            }
        }
    }
    carChange(event){
        var clientData = this.state.clientData;
  
        // Extract the value of the input element represented by `target`
        var modifiedValue = event.target.value;
      
        // Update the customer object's first name
        clientData.carnumber = modifiedValue;
      
        // Update the state object
        this.setState({
          clientData: clientData
        });
        console.log(this.state.clientData)
    }
    fullNameChange(event){
        var clientData = this.state.clientData;
  
        // Extract the value of the input element represented by `target`
        var modifiedValue = event.target.value;
      
        // Update the customer object's first name
        clientData.fullname = modifiedValue;
      
        // Update the state object
        this.setState({
          clientData: clientData
        });
        console.log(this.state.clientData)
    }
    phoneNumberChange(event){
        var clientData = this.state.clientData;
  
        // Extract the value of the input element represented by `target`
        var modifiedValue = event.target.value;
      
        // Update the customer object's first name
        clientData.phonenumber = modifiedValue;
      
        // Update the state object
        this.setState({
          clientData: clientData
        });
        console.log(this.state.clientData)
    }
    passwordChange(event){
        var clientData = this.state.clientData;
  
        // Extract the value of the input element represented by `target`
        var modifiedValue = event.target.value;
      
        // Update the customer object's first name
        clientData.password = modifiedValue;
      
        // Update the state object
        this.setState({
          clientData: clientData
        });
        console.log(this.state.clientData)
    }
    btnSignup(event){
        var clientData = this.state.clientData;
        clientData.validate = false;
        this.setState({
            clientData: clientData
          });


        var data = JSON.stringify(this.state.clientData);
          
          var config = {
            method: 'post',
            url: 'http://127.0.0.1:5000/signup',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    
  render() {
    const avatarStyle = {backgroundColor:'#e79702'}
    const  paperStyle = {padding:10,height:'80vh',width:280,margin:"20px auto"}
    const btnStyle={margin:'8px 0'}
    const gridStyle = {margin:'10px 0'}
    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
            <form action="http://localhost:8080/signup" method="post">

            
                <Grid align="center">
                    <Avatar style={avatarStyle}><GroupAddOutlined/></Avatar>
                    <Typography variant='h5' >Create an account</Typography>

                </Grid>
                <Grid style={gridStyle}>
                    <TextField  label='Full name' placeholder='Enter full name' fullWidth required onChange={this.fullNameChange.bind(this)}/>
                

                </Grid>
                <Grid style={gridStyle}>
                    <TextField  label='Car number' placeholder='Enter car number' fullWidth required onChange={this.carChange.bind(this)}/>
                

                </Grid>
                <Grid style={gridStyle}>
                    <TextField  label='Phone number' placeholder='Enter phone number' fullWidth required onChange={this.phoneNumberChange.bind(this)}/>
                

                </Grid>
                <Grid style={gridStyle}>
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required onChange={this.passwordChange.bind(this)}/>
                </Grid>
                <Grid style={gridStyle}>
                    <FormControlLabel 
                        control={
                            <Checkbox
                                required
                                name="checkbox"
                                color="#e79702"
                            />
                        } 
                        label='I accepted all conditions'               
                    />

                
                </Grid>
                <Grid style={gridStyle}>
                    <Button fullWidth style={btnStyle} onClick={this.btnSignup.bind(this)} color='primary' variant='contained'>Register</Button>
                </Grid>
            </form>
            
            <Grid>
            
               
                <Typography style={gridStyle}>You have an account?
                    <Link href='http://localhost:3000/login'>Sign in</Link>
                </Typography>
            </Grid>
            
            
            
        </Paper>
      </Grid>
    )
  }
}
