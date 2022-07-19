import React from 'react';

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

const labels = ['user 1', 'user 2', 'user 3', 'user 4', 'user 5', 'user 6', 'user 7'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

export default function LeaderBoardChart() {
  return (
    <>
    <div id='barchart-container'>

        <Bar id='barchart' redraw={true} options={options} data={data} />

    </div>
    </>
    );
}
