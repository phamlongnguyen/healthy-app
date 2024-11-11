import { Line } from 'react-chartjs-2'
import './styles.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
const data = {
  labels: [
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
  ],
  datasets: [
    {
      label: 'Dataset 1',
      data: [90, 85, 70, 80, 75, 70, 80, 75, 70, 65, 60, 55],
      backgroundColor: '#FFCC21',
      borderColor: '#FFCC21',
      fill: false,
    },
    {
      label: 'Dataset 2',
      data: [95, 90, 75, 85, 80, 75, 85, 80, 75, 70, 65, 60],
      borderColor: '#8FE9D0',
      backgroundColor: '#8FE9D0',
      fill: false,
    },
  ],
}
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
}
const LineChart = () => {
  return (
    <div className="line-chart">
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
