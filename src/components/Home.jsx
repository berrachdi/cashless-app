
import React, { Component } from 'react'
import BingMapsReact from "bingmaps-react";
import {Grid, Typography,Paper, Avatar, TextField, Checkbox,Button,FormControlLabel, Link,CardActions,CardMedia,CardContent,Card} from '@material-ui/core'
import Slider from "react-slick";


export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            parks:[
                {
                    "id": "1",
                    "parkName":"Parking anouar",
                    "address": "Street Hassan 2",
                    "pricePerHour": 5,
                    "review":3,
                    "latitude":34.903137,
                    "longitude": -2.325323



                }
            ]
        }
    
    }
  render(){
    const pushPin = {
        center: {
          latitude: 34.903137,
          longitude: -2.325323,
        },
        options: {
          title: "Parking anouar",
        },
      }
      
      const pushPins = [pushPin];
      
    
        
       
                return (
                  
                    <Paper style={{padding:10,height:'90vh',width:280,margin:"20px auto"}}>
                            <BingMapsReact 
                            
                            bingMapsKey="AjkSdJ-aO4g3Ddbnf1b47Nba4Gy3_gH5D11QHUGQVUtslF7RwzMuf1g_9PybixWC"
                            pushPins={pushPins}
                            viewOptions={{ center: { latitude: 34.903137, longitude: -2.325323 } }}
                            >
                              
                            </BingMapsReact>
                           
        
       
                            
                    </Paper>
                                    
                    
               
                )
         
        
              
            
        

  }
    
  
}




