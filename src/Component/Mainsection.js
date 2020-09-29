import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalData from './GlobalData';
import CountryData from './CountryData';
import PieChart from './Pie';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: 50,
    },
}));

export default function Mainsection() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={4} sm={12}>
                    <Paper className={classes.paper} elevation={3}>
                      <h4> GLOBAL DATA </h4>
                        <GlobalData />
                    </Paper>
                </Grid>

            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={3}>
                        <CountryData />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={3}>
                        <PieChart/>
                    </Paper>

                </Grid>
            </Grid>
        </div>
    )
};
