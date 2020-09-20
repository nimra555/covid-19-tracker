import React,{useState} from 'react';
import Countrybar from './Countrybar';
import Searchcountry from './Search';

function Footer(props){
    // const [state, setState] = useState({
    //     data: {},
    //     country: '',
    //   });
    
    //   const handleChange = async (country) => {
    //     // 
    //     console.log(country);
        // setState({
        //   ...state,
        //   [name]: event.target.value,
        // });
    //   };
    return(
       <div>
           <Searchcountry />
           <Countrybar country={props.country}/>
       </div>
    )
}

export default Footer;