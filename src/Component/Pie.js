import React,{useEffect} from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
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
    useEffect(()=>{
        async function  PakistanData(){
        //   setDataLoading(true);
          const data = await fetch('https://thevirustracker.com/pakistan-coronavirus-information.pk');
          const response = await data.json();
          console.log(response);
        }
        PakistanData()
      },[])
    return (
        <div>
          <h2>Pie Example</h2>
          <Pie data={data} height={80}/>
        </div>
      );
}

  
export default PieChart;   