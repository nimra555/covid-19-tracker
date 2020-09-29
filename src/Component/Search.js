import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Searchcountry({setState}) {
    const [Countrysearch,setCountrySearch] = useState([]);
    useEffect(() => {
        async function Countrysearchbar() {
          const data = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
          const response = await data.json();
          console.log(response.countryitems[0]);
          setCountrySearch(response.countryitems[0]);
         
        }
        Countrysearchbar();
      }, [])
  const classes = useStyles();
 

  const handleChange = async (country) => {
      console.log(country);
    setState(country);
  };

  return (
    <div>
        <FormControl className={classes.formControl}>
            <NativeSelect defaultValue="1" onChange={(e) => handleChange(e.target.value)}>
                {Object.keys(Countrysearch).map((country) => <option key={country} value={country}>{Countrysearch[country].title}</option>)}
            </NativeSelect>
        </FormControl>
    </div>  
   )
}      


export default Searchcountry;