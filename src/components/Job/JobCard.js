import React from 'react';
import {Box,Button,Grid, Typography, makeStyles} from '@material-ui/core';
import {differenceInMinutes} from 'date-fns';


const skills  = ["Javascript", "React.js", "Node.js"];

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
export default (props) =>{
 const classes= useStyles();
    return(

       
        <Box p={2} className = {classes.wrapper}>
        <Grid container alignItems="center">
        < Grid item xs container direction="column" alignItems="flex-start">
        <Typography variant = " subtitlel " > {props.title} </Typography>
        <Typography variant = " subtitle2 " className={classes.companyName} > {props.companyName} </Typography>
        </Grid >
        < Grid item container xs > 
        {
            props.skills.map(
                skill =>(
                    <Grid className={classes.skillChip} key={skill} item>
                        {skill}
                        </Grid>
                )
            )
        }
        
        </Grid>
        < Grid item xs container direction="column" alignItems="flex-end">
        <Typography variant ="caption">  { `${props.postedOn}`} | {props.type} | {props.location} </Typography>
        <Button variant="outlined" onClick={props.open} >Check</Button>
        </Grid>
        </Grid>
        </Box>

    );

}