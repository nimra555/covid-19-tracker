import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    // maxHeight: 1000,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  option:{
    maxHeight: 1000,
  }
}));




export default function AllcountryData() {
  const [country,setCountry] = useState();
  useEffect(()=>{
    async function CountryData(){
      // setDataLoading(true);
      const data = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
      const response = await data.json();
      console.log(response.countryitems[0]);
      setCountry(response.countryitems[0]);
      // setDataLoading(false);
    }
    CountryData();
  },[])
  const classes = useStyles();
  // const theme = useTheme();
  // const [personName, setPersonName] = React.useState([]);

  // const handleChange = (event) => {
  //   setPersonName(event.target.value);
  // };

  // const handleChangeMultiple = (event) => {
  //   const { options } = event.target;
  //   const value = [];
  //   for (let i = 0, l = options.length; i < l; i += 1) {
  //     if (options[i].selected) {
  //       value.push(options[i].value);
  //     }
  //   }
  //   setPersonName(value);
  // };

  return (
    <div>
     <Paper elevation={3}>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="select-multiple-native">
        {/* {countryData && countryData.results && countryData.countryitems[0].total_recovered}             */}
  
        </InputLabel>
        <Select
          multiple
          native
          // value={countryData}
          
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {/* {countryData.map((name) => ( */}
            <option  className={classes.option}>
              {country && country.countryitems && country.countryitems[0].total_recovered}            
              
            </option>
         
        </Select>
      </FormControl>
      </Paper>
    </div>
  )};