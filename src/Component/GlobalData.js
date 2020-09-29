import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root: {
    display: 'flex',
    justifyContent:'center',
  
    '& > *': {
      margin: theme.spacing(1),
      height: theme.spacing(16),
    },
  },
  container: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    boxShadow:'2px  2px 10px 20px white ' ,
  
  }
}));

const useStylesTypography = makeStyles({
  root: {
    padding:'30px 50px' ,
    textTransform:'uppercase',
    fontStyle:'light',
  },
});

export default function GlobalData() {

  const [globalData,setGlobalData] = useState();
  const [dataLoading,setDataLoading] = useState(false);
   
  useEffect(()=>{
    async function GloballyData(){
      setDataLoading(true);
      const data = await fetch('https://api.thevirustracker.com/free-api?global=stats');
      const response = await data.json();
      console.log(response);
      setGlobalData(response);
      setDataLoading(false);
    }
    GloballyData()
  },[])


  const classes = useStyles();
  const classTypography = useStylesTypography();

  const loading = "Loading";

  if(dataLoading){
    return(
    <div className={classes.root}>
      <Paper elevation={3} className={classes.container} >
          <div className={classTypography.root}>
            <Typography variant="h4" gutterBottom>
              {loading}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
            {globalData && globalData.results && globalData.results[0].total_cases} 
            </Typography>
          </div>
      </Paper>
      
      <Paper elevation={3} >
          <div className={classTypography.root}>
            <Typography variant="h4" gutterBottom>
             {loading}         
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
            {globalData && globalData.results && globalData.results[0].total_deaths}            
            </Typography>
          </div>
        </Paper>
  
        <Paper elevation={3} >
          <div className={classTypography.root}>
            <Typography variant="h4" gutterBottom>
              {loading}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {globalData && globalData.results && globalData.results[0].total_recovered}            
            </Typography>
          </div>
        </Paper>
  
       
      </div>
    );
  }

  return (
  <div className={classes.root}>
    <Paper elevation={3} style={{borderBottom:'10px solid yellow'}} >
        <div className={classTypography.root}>
          <Typography variant="h4" gutterBottom >
            Total Cases
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
           {globalData && globalData.results && globalData.results[0].total_cases} 
          </Typography>
        </div>
    </Paper>
    
    <Paper elevation={3} style={{borderBottom:'10px solid red'}} >
        <div className={classTypography.root}>
          <Typography variant="h4" gutterBottom>
            Total Deaths           
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
          {globalData && globalData.results && globalData.results[0].total_deaths}            
          </Typography>
        </div>
      </Paper>

      <Paper elevation={3} style={{borderBottom:'10px solid green'}} >
        <div className={classTypography.root}>
          <Typography variant="h4" gutterBottom>
            Total Recovered
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {globalData && globalData.results && globalData.results[0].total_recovered}            
          </Typography>
        </div>
      </Paper>

      
    </div>
  );
}
