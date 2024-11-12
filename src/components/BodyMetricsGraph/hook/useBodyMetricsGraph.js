import { useEffect, useState } from 'react';
import { getBodyMetricsData } from '../../../services';

const useBodyMetricsGraph = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [infoChart, setInfoChart] = useState([]);

  const fetchData = () => {
    setIsLoading(true);
    getBodyMetricsData()
      .then(res => setInfoChart(res))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { isLoading, infoChart };
};

export default useBodyMetricsGraph;
