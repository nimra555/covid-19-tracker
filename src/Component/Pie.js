import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';


function PieChart() {
	const [pakistanData, setPakistanData] = useState({});
	useEffect(() => {
		async function PakistanData() {
			const data = await fetch('https://api.apify.com/v2/key-value-stores/QhfG8Kj6tVYMgud6R/records/LATEST?disableRedirect=true');
			const response = await data.json();
			console.log(response);
			setPakistanData(response)
		}
		PakistanData()
	}, [])
	const data = {
		labels: [
			'Recovered',
			'Death',
			'Infected',
		],
		datasets: [{
			data: !!pakistanData ? [pakistanData.recovered, pakistanData.deceased, pakistanData.infected] : [],
			backgroundColor: [
				'green',
				'red',
				'yellow',
			],
			hoverBackgroundColor: [
				'green',
				'red',
				'yellow',
			]
		}]
	};
	return (
		<div>
			<h2>Pakistan Data</h2>
			<Pie data={data} height={180} />
		</div>
	);
}


export default PieChart;   