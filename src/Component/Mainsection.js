import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalData from './GlobalData';
import CountryData from './CountryData';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: 80,
    },
}));

export default function Mainsection() {
   
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

            <Grid item xs={12} sm={4}>
                <Paper className={classes.paper} elevation={3}>  
                <GlobalData />                         
                </Paper>
            </Grid>  
            <Grid item xs={12} sm={8}>
                <Paper className={classes.paper} elevation={3}>
                   <CountryData/>                            
                </Paper>
            </Grid>            
            
          </Grid>
        </div>
    )        
};
