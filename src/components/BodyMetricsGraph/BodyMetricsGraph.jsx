import { CircularProgress } from '@mui/material';
import useBodyMetricsGraph from './hook/useBodyMetricsGraph';
import { LineChart } from '../common';
import './styles.scss';

const BodyMetricsGraph = () => {
  const { isLoading, infoChart } = useBodyMetricsGraph();

  return (
    <div className="body-metrics-graph">
      {isLoading ? (
        <div className="body-metrics-graph__loading">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <LineChart infoChart={infoChart} />
      )}
    </div>
  );
};

export default BodyMetricsGraph;
