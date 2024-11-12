import { Line } from 'react-chartjs-2';
import './styles.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import PropTypes from 'prop-types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  width: '500px',
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      grid: {
        color: '#777777',
      },
      ticks: {
        color: '#FFFFFF',
      },
      border: {
        display: false,
      },
    },
  },
};
const LineChart = ({ infoChart }) => {
  const data = {
    labels: infoChart.map(e => e.month),
    datasets: [
      {
        label: 'Data 1',
        data: infoChart.map(e => e.data1),
        backgroundColor: '#FFCC21',
        borderColor: '#FFCC21',
        fill: false,
      },
      {
        label: 'Data 2',
        data: infoChart.map(e => e.data2),
        borderColor: '#8FE9D0',
        backgroundColor: '#8FE9D0',
        fill: false,
      },
    ],
  };
  return (
    <div className="line-chart">
      <Line data={data} options={options} />
    </div>
  );
};

LineChart.propTypes = {
  infoChart: PropTypes.arrayOf(
    PropTypes.shape({
      data1: PropTypes.number,
      data2: PropTypes.number,
      month: PropTypes.string,
    })
  ),
};

export default LineChart;
