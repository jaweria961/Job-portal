import React , {useState} from 'react';


import {Box,
    Button,
    Grid,
    FilledInput, 
    Select, 
    Dialog,
    DialogTitle, 
    DialogContent, 
    Typography, 
    makeStyles,
    DialogActions,
    IconButton,
MenuItem,
CircularProgress
} 
from '@material-ui/core';
import {Close as CloseIcon} from '@material-ui/icons';
const skills  = ["Javascript", "React.js", "Node.js", "Vue", "Firebase", "MongoDB","SQL"];

const useStyles = makeStyles((theme) => (
    {
      
      
        skillChip:{
            margin:theme.spacing(0.5),
            padding:theme.spacing(0.6),
            borderRadius: "5px",
            backgroundColor: theme.palette.secondary.main,
            color:"#fff",
            transition:".3s"
        }
    }
)) ;

const init ={
    
        title:'',
        type:'Full time',
        companyName:'',
        companyUrl: '',
        location:'Onsite',
        link:'',
        
       
       
        description:'',
        skills:[]


    
}
    export default(props) =>{
        
        const [loading, setLoading]= useState(false);
        const [jobDetails, setJobDetails] =useState(init);
        const handleChange = e =>{
            
            e.persist();
            setJobDetails((oldState) => ({
                ...oldState, [e.target.name]: e.target.value,

            }));
        };
        console.log(jobDetails);
        
 const addRemoveskill = (skill) => 
 {

 debugger;
 jobDetails.skills.includes(skill) 
 ? setJobDetails((oldState) => ({
   
    ...oldState, skills:oldState.skills.filter(s => s !== skill),
    

 }))
 
 
 :  setJobDetails(oldState => ({
    ...oldState, 
    skills:oldState.skills.concat(skill)
 }));
 
}
 console.log(setJobDetails);
 const handleSubmit = async () =>{
    for(const field in jobDetails){
        debugger;
        if (typeof jobDetails[field] === 'string' && !jobDetails[field])
        return;

    }
    if(!jobDetails.skills.length) return;
    setLoading(true);
    await props.postJob(jobDetails);
    setLoading(false);
 };

 const closeModal = () =>{

    setJobDetails(init);
    setLoading(false);
    props.closeModal();
    
 }
 
        const   classes    = useStyles();
        return(
            <Dialog open={props.newJobModal} fullWidth>
                <DialogTitle>

                <Box p={3} display="flex" justifyContent="space-between" alignitems="center"> 
               Post a Job
                <IconButton onClick = {closeModal}>
                    <CloseIcon />
                </IconButton>
                </Box>
                </DialogTitle>
                
                    <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>

                                <FilledInput 
                                onChange= {handleChange}
                                name="title"
                                value={jobDetails.title}
                                autoComplete='off'
                                fullWidth placeholder = "Job Title" disableUnderline fullwidth />

                               
                            </Grid>
                            <Grid item xs={6} >

                            <Select
                             onChange= {handleChange}
                            name="type"
                            value={jobDetails.type}
                            fullWidth disableUnderline variant="filled" defaultValue="Full time">
                            <MenuItem value="fulltime">Full Time</MenuItem>
                            <MenuItem value="parttime">Part Time</MenuItem>
                            <MenuItem value="contract">Contract</MenuItem>

        </Select >
                        </Grid>
                        <Grid item xs={6} pt={2}>

                                <FilledInput 
                                 onChange= {handleChange}
                                 name="companyName"
                                 value={jobDetails.companyName}
                                autoComplete='off'
                                placeholder = "Company Name" fullWidth disableUnderline fullwidth />

                               
                            </Grid>
                            <Grid item xs={6} pt={2}>

                                <FilledInput 
                                 onChange= {handleChange}
                                name="companyUrl"
                                value={jobDetails.companyurl}
                                autoComplete='off'
                                placeholder = "Company URL" fullWidth disableUnderline fullwidth />

                            </Grid>
                            <Grid item xs={6} pt={2}>

                            <Select  
                            name="location"
                            onChange= {handleChange}
                            value={jobDetails.location}
                            fullWidth disableUnderline variant="filled" defaultValue = "Full Time">
                                <MenuItem value="fulltime">Remote</MenuItem>
                                    <MenuItem value="parttime">Office Job</MenuItem>
                                 </Select>
                                        </Grid>
                                        <Grid item xs={6} pt={2}>

                                <FilledInput
                                onChange= {handleChange}
                                name="link"
                                value={jobDetails.link}
                                autoComplete='off'
                                fullWidth placeholder = "Job Link" disableUnderline />

                               
                            </Grid>
                            <Grid item xs={12} >

                                <FilledInput 
                                 onChange= {handleChange}
                                name="description"
                                value={jobDetails.description}
                                autoComplete='off'
                                placeholder = "Description" multiline  rows={4} disableUnderline fullWidth/>

                               
                            </Grid>
                            
                        </Grid>
                        <Box  className = {classes.wrapper}>
                        <h5>Skills</h5>
        <Grid container alignItems="center">
       

        < Grid item container xs > 
        {
            skills.map(
                skill =>(
                    <Grid onClick= {() => addRemoveskill(skill)} className={classes.skillChip} key={skill} item>
                        {skill}
                        </Grid>
                )
            )
        }
        
        </Grid>
        </Grid>
        
        
        </Box>
                    </DialogContent>
                    <DialogActions>
                    <Box color="red" width="100%" display="flex" justifyContent="space-between" alignItmes="center">
                <Typography >
                    *Required Fields
                </Typography>
                <Button disable={loading} 
                onClick={handleSubmit}
                variant="contained" 
                disableEvaluation 
                color="primary">
                    { loading ? 
                    (<CircularProgress 
                        color="secondary" 
                        size="22"/>)
                    
                
                :
                    ("Post Job")}
                    </Button>

                </Box>
                </DialogActions>
            </Dialog>
           

        );
    };








