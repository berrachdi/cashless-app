import React, { Component } from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import GroupAddOutlined from '@material-ui/icons/GroupAddOutlined';
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
                carNumber: props.carNumber,
                fullName: props.fullName,
                phoneNumber: props.phoneNumber,
                validateAccount: props.validateAccount,


            }
        }
    }
    
  render() {
    const avatarStyle = {backgroundColor:'#e79702'}
    const  paperStyle = {padding:10,height:'70vh',width:280,margin:"20px auto"}
    const btnStyle={margin:'8px 0'}
    const gridStyle = {margin:'10px 0'}
    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
                <Avatar style={avatarStyle}><GroupAddOutlined/></Avatar>
                <Typography variant='h5' >Create an account</Typography>

            </Grid>
            <Grid style={gridStyle}>
                <TextField  label='Full name' placeholder='Enter full name' fullWidth required/>
               

            </Grid>
            <Grid style={gridStyle}>
                <TextField  label='Car number' placeholder='Enter car number' fullWidth required/>
               

            </Grid>
            <Grid style={gridStyle}>
                <TextField  label='Phone number' placeholder='Enter phone number' fullWidth required/>
               

            </Grid>
            <Grid style={gridStyle}>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
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
                <Button fullWidth style={btnStyle} type='submit' color='primary' variant='contained'>Register</Button>
            </Grid>
            <Grid>
               
                <Typography style={gridStyle}>You have an account?
                    <Link href='#'>Sign in</Link>
                </Typography>
            </Grid>
            
            
            
        </Paper>
      </Grid>
    )
  }
}
