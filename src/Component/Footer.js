import React,{useState} from 'react';
import Countrybar from './Countrybar';
import Searchcountry from './Search';

function Footer(){
    const [state, setState] = useState("1");
   
    return(
       <div>
           <Searchcountry setState={setState}/>
    
           <Countrybar state={state}/>
       </div>
    )
}

export default Footer;