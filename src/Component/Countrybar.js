import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { display } from '@material-ui/system';
import { Recoverable } from 'repl';


function Countrybar() {
  const [countryBar,setCountrybar] = useState({});

  useEffect(()=>{
    async function CountryBar() {
        const data = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
        const response = await data.json();
        console.log(response.countryitems[0]);
        setCountrybar(response.countryitems[0]);
       
      }
      CountryBar();
  },[]);

  const barChart = {
      <Bar
        data={{
            labels: ['Infected','Recovered','Deaths'],
            datasets:[{
                label:'People',
                backgroundColor : [
                    'rgba(0,0,255,0.5)'
                ]
            }]
        }}
        options={{
            legend:{ display : false},
            title : {display:true,text:`Current State in ${country}`}
        }}
        />
  }
  

  return (
        <div>
            <h2>Bar Example (custom size)</h2>
            {/* <Bar
                data={data}
                width={100}
                height={50}
                options={{
                    maintainAspectRatio: false
                }}
            /> */}
        </div>
    );
}

export default Countrybar;