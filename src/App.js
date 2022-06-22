  import React, {useState,useEffect} from "react";

import theme from "./theme/theme";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";
import NewJobModel from "./components/Job/NewJobModal";
import ViewModal from "./components/Job/ViewModal";

import {Close as CloseIcon} from '@material-ui/icons';
import  {firestore,app} from "./firebase/config";


import {Box, Grid, Typography, Button, ThemeProvider,CircularProgress } from '@material-ui/core';


export default () => {
  const [newJobModal, setNewJobModal] = useState(false); 
  const [viewJob, setViewJob] = useState({}); 
  const [jobs, setJobs]= useState([]);
  const[customSearch, setCustomSearch] = useState(false);
  const [loading, setLoading]= useState(true);
  const fetchJobs = async () =>{

    const req = await firestore
    .collection('jobs')
    .orderBy('postedOn','desc')
    .get();
    
   const tempJobs = req.docs.map((job)=>({
     ...job.data(), 
     id: job.id, 
     postedOn: job.data().postedOn.toDate( )
    }));
  setJobs(tempJobs);

  setLoading(false);
   }; 
   
   const customfetchJobs = async jobSearch =>{
    
    setLoading(true);
setCustomSearch(true)
    const req = await firestore
    .collection('jobs')
    .orderBy('postedOn','desc')
    .where('location','==', jobSearch.location)
    .where('type','==', jobSearch.type)
    .get();
    
   const tempJobs = req.docs.map((job)=>({
     ...job.data(), 
     id: job.id, 
     postedOn: job.data().postedOn.toDate( )
    }));
  setJobs(tempJobs);
console.log(tempJobs)
  setLoading(false);
   }; 
   
  const postJob = async jobDetails =>{
    await firestore.collection('jobs').add({...jobDetails,
      postedOn: app.firestore.FieldValue.serverTimestamp() || null});
      fetchJobs();
  }
   useEffect(() => {
      fetchJobs();
    },
    []);
  
  return <ThemeProvider theme={theme}>
 <Header openNewJobModal= {() => setNewJobModal(true)}/>
 <NewJobModel 
 closeModal = {
  () =>  setNewJobModal(false)
 }
 newJobModal= {newJobModal} 
 postJob={postJob}/>
 <ViewModal job={viewJob} closeModal={() => setViewJob({})}
 />
 <Grid container justify="center">
            <Grid item xs={10}>
            <SearchBar  customfetchJobs={customfetchJobs}/>
            {
              loading ? (<CircularProgress />) 
              :
             (
              <>
              {
                customSearch && 
                (<Box>

                  <Button onClick= {fetchJobs}>
                    <CloseIcon />
                    Custom Search
                    </Button>
                </Box>
                )
              }
              {
                 jobs.map(job => (
                 <JobCard  open={() => setViewJob(job)} key= {job.id} {...job} />
                 ))
              }
               
               
              
               </>
               )}
           
     

            </Grid>
</Grid>
  </ThemeProvider>
 
  
};
