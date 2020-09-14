import React,{useEffect, useState} from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [30, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

function PieChart(){
	const [pakistanData,setPakistanData] = useState({});
    useEffect(()=>{
        async function  PakistanData(){
        //   setDataLoading(true);
		//   const data = await fetch('https://thevirustracker.com/pakistan-coronavirus-information.pk');
		  const data = await fetch( 'https://api.apify.com/v2/key-value-stores/QhfG8Kj6tVYMgud6R/records/LATEST?disableRedirect=true');
          const response = await data.json();
		  console.log(response);
		  setPakistanData(response)
        }
        PakistanData()
      },[])
    return (
        <div>
          <h2>Pie Example</h2>
          <Pie data={data} height={80}>
			  {pakistanData.death}
		  </Pie>	  
        </div>
      );
}

  
export default PieChart;   