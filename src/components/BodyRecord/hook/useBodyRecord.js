import { useEffect, useState } from 'react';
import { getBodyMetricsData } from '../../../services';
import { OPTIONS_CHART } from '../constants';

const useBodyRecord = () => {
  const [tabSelected, setTabSelected] = useState(OPTIONS_CHART[0]?.id);
  const [isLoading, setIsLoading] = useState(false);
  const [infoChart, setInfoChart] = useState([]);

  const fetchData = (monthStart = 6) => {
    setIsLoading(true);
    getBodyMetricsData(monthStart)
      .then(res => setInfoChart(res))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeTab = option => {
    if (option.id !== tabSelected) {
      setTabSelected(option.id);
      fetchData(Number(option.id));
    }
  };

  return { infoChart, isLoading, tabSelected, handleChangeTab };
};

export default useBodyRecord;
