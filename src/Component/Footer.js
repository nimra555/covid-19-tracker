import React,{useState} from 'react';
import Countrybar from './Countrybar';
import Searchcountry from './Search';

function Footer(props){
    const [state, setState] = useState("1");
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
           <Searchcountry setState={setState}/>
    
           <Countrybar state={state}/>
       </div>
    )
}

export default Footer;