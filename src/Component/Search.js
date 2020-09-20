import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
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

function Searchcountry() {
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
  const [state, setState] = React.useState({
    data: {},
    country: '',
  });

  const handleChange = async (country) => {
      console.log(country);
    // const name = event.target.name;
    setState({
      country: country,
    });
  };

  return (
    <div>
        <FormControl className={classes.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleChange(e.target.value)}>
                {/* <option value="global">global</option> */}
                {Object.keys(Countrysearch).map((country) => <option key={country} value={Countrysearch[country].title}>{Countrysearch[country].title}</option>)}
            </NativeSelect>
        </FormControl>
    </div>  
   )
}      


export default Searchcountry;