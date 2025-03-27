import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const LineChart = ({ datasets }: { datasets: number[] }) => {
  const labels = ['Nov', 'Dez', 'Jan', 'Feb', 'Mar'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Nível de qualidade do ar x Mês',
        data: datasets,
        fill: false,
        borderColor: '#246cda',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Nível de qual. do ar',
        },
        display: true,
        min: 10,
      },
      x: {
        title: {
          display: true,
          text: 'Mês',
        },
        display: true,
      },
    },
  };

  return (
    <div style={{ width: '50vw', minWidth: '300px', margin: '0 auto' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
