import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));

const useStylesTypography = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
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
      <Paper elevation={3} >
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
  
        <Paper elevation={3} >
          <div className={classTypography.root}>
            <Typography variant="h4" gutterBottom>
              {loading}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {globalData && globalData.results && globalData.results[0].total_unresolved}            
            </Typography>
          </div>
        </Paper>
      </div>
    );
  }

  return (
  <div className={classes.root}>
    <Paper elevation={3} >
        <div className={classTypography.root}>
          <Typography variant="h4" gutterBottom>
            Total Cases
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <NumberFormat value={globalData && globalData.results && globalData.results[0].total_cases} diplayType={'text'} thousandSeperator={true} /> 
          {/* // {globalData && globalData.results && globalData.results[0].total_cases}  */}
          </Typography>
        </div>
    </Paper>
    
    <Paper elevation={3} >
        <div className={classTypography.root}>
          <Typography variant="h4" gutterBottom>
            Total Deaths           
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
          {globalData && globalData.results && globalData.results[0].total_deaths}            
          </Typography>
        </div>
      </Paper>

      <Paper elevation={3} >
        <div className={classTypography.root}>
          <Typography variant="h4" gutterBottom>
            Total Recovered
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {globalData && globalData.results && globalData.results[0].total_recovered}            
          </Typography>
        </div>
      </Paper>

      <Paper elevation={3} >
        <div className={classTypography.root}>
          <Typography variant="h4" gutterBottom>
            Total Unresolved
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {globalData && globalData.results && globalData.results[0].total_unresolved}            
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
