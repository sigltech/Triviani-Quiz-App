import React from 'react';
import { useSelector } from 'react-redux';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function LeaderBoardChart() {

  const {player} = useSelector((state) => state);

  const options = {
    responsive: true,
    plugins: {
      legend: {
          display: false,
        position: 'top',
        fontColor: 'white'
      },
      title: {
        display: false,
        text: 'LeaderBoard',
      },
    },
    scales: {
      xAxes: [{
          gridLines: {
              display:false
          }
      }],
      yAxes: [{
          gridLines: {
              display:false
          }   
      }]
  }
  };
  
  const labels = player.map((players) => {
    return players.name;
  });
  
  console.log(labels);
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: player.map((players) => players.score),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return (
    <>
    <div id='barchart-container'>

        <Bar id='barchart' redraw={true} options={options} data={data} />

    </div>
    </>
    );
}
