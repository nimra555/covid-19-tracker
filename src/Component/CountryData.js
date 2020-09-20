import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({

  container: {
    maxHeight: 440,
  },
});



export default function AllcountryData({handlechange}) {
  const [country, setCountry] = useState();
  const [dataLoading, setDataLoading] = useState(true);
  
  useEffect(() => {
    async function CountryData() {
      setDataLoading(true);
      const data = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
      const response = await data.json();
      console.log(response.countryitems[0]);
      setCountry(response.countryitems[0]);
      setDataLoading(false);
    }
    CountryData();
  }, [])
  const classes = useStyles();
  const loading = "Loading";

  if (dataLoading) {
    return (
      <div>
        {loading}

      </div>
    )
  }
  return (
    <div>

      <Paper className={classes.root}>
        <TableContainer component={Paper} className={classes.container}>
          <Table className={classes.table} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell  
                 >Country Name</TableCell>
                <TableCell>Total Cases</TableCell>
                <TableCell>Total Recovered</TableCell>
                <TableCell>Total Deaths</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(country).map(item => (
                <TableRow hover role="checkbox" tabIndex={-1} key={item}>
                 
                  <TableCell>{country && country[item] && country[item].title}</TableCell>
                  <TableCell> {country && country[item] && country[item].total_cases}</TableCell>
                  <TableCell>{country && country[item] && country[item].total_recovered}</TableCell>
                  <TableCell>{country && country[item] && country[item].total_deaths}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
     </Paper> 
    </div>
  )
                      
};
    
    
    
    
    
    
