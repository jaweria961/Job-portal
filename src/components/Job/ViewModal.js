import React , {useState} from 'react';
import {format} from "date-fns";

import {Box,
    Button,
    Grid,

    Dialog,
    DialogTitle, 
    DialogContent, 
    Typography, 
    IconButton,
    DialogActions,
    makeStyles

} 
from '@material-ui/core';
import {Close as CloseIcon} from '@material-ui/icons';
const useStyles = makeStyles((theme) => (
    {
        wrapper:{
            border:"1px solid #e8e8e8e",
            cursor:"pointer",
            transition:".3s",

            "&:hover" :{
               boxShadow: "0px 5px 25px rgba(0,0,0,0.1)",
               borderLeft: "6px solid black",

            },
        },
        companyName:{
            fontSize:"12",
            backgroundColor:theme.palette.primary.main,
            padding:theme.spacing(0.6),
            borderRadius: "5px",
            display :"inline-block"

        },
        skillChip:{
            margin:theme.spacing(0.5),
            padding:theme.spacing(0.6),
            borderRadius: "5px",
            backgroundColor: theme.palette.secondary.main,
            color:"#fff",
            transition:".3s"
        }
    }
)

);
export default (props) =>(
    
   
<Dialog open={!!Object.keys(props.job).length} fullWidth> 
    <DialogTitle> 
        <Box display="flex" justifyContent = "space-between" alignItems = "center"> 
       {props.job.title} {props.job.companyName}
        <IconButton  onClick={props.closeModal}> 
        < CloseIcon /> 
        </IconButton > 
        </Box >
         </DialogTitle>
         <DialogContent>
         <Box display="flex" justifyContent = "space-between" alignItems = "center"> 
         <Typography>
            Job type 
         </Typography>
         <Typography>
            {props.job.type}
         </Typography>

        
        
        </Box >
        <Box display="flex" justifyContent = "space-between" alignItems = "center"> 
         <Typography>
            Company Url
         </Typography>
         <Typography>
            {props.job.companyUrl}
         </Typography>

        
        
        </Box >
        <Box display="flex" justifyContent = "space-between" alignItems = "center"> 
         <Typography>
            Job link
         </Typography>
         <Typography>
            {props.job.link}
         </Typography>

        
        
        </Box >
        <Box display="flex" justifyContent = "space-between" alignItems = "center"> 
         <Typography>
            Job location
         </Typography>
         <Typography>
            {props.job.location}
         </Typography>

        
        
        </Box >
        <Box display="flex" justifyContent = "space-between" alignItems = "center"> 
         <Typography>
            Job skills
         </Typography>
          {props.job.skills}
        </Box >
        <Box display="flex" justifyContent = "space-between" alignItems = "center"> 
         <Typography variant="caption">
            Posted On
         </Typography>
         {/* <Typography>
         { `${props.job.postedOn}` && format(`${props.job.postedOn}`, "DD/MM/YYYY HH:MM")} */}
         < Typography variant="caption" > 
         {props.job.postedOn && format ( props.job.postedOn , " dd/MMM/yyyy HH:MM" ) } 
         </Typography>
         {/* </Typography> */}
        </Box >
        
         </DialogContent>
         <DialogActions>

         </DialogActions>
         </Dialog>

);
     