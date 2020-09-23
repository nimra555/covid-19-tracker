import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';


function Countrybar({state}) {
    const [countrybar, setCountrybar] = useState({});

    useEffect(() => {
        async function CountryBar() {
            const data = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            const response = await data.json();
            console.log(response.countryitems[0]);
            setCountrybar(response.countryitems[0]);

        }
        CountryBar();
    }, []);


    const barChart =
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    data: (!!countrybar && !!countrybar[state])
                        ? [countrybar[state].total_cases, countrybar[state].total_recovered, countrybar[state].total_deaths]
                        : [],

                    label: 'People',
                    backgroundColor: [
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)',
                    ]
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current State in ${countrybar && countrybar[state] && countrybar[state].title}` }
            }}
        />



    return (
        <div>
            <h2>Country Bar</h2>
            {barChart}

        </div>
    );
}

export default Countrybar;