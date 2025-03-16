import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const StockChart = ({ points }) => {
  const data = {
    labels: points.map((_, index) => index),
    datasets: [
      {
        label: 'Stock Price',
        data: points,
        borderColor: 'rgb(10, 32, 87)',
        backgroundColor: 'rgba(174, 136, 12, 0.2)',
        fill: true,
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: false,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price',
        },
      },
    },
  };

  return (
    <div style={{ width: '98%', height: '200px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default StockChart;