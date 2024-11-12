import { useEffect, useState } from 'react';
import { getExerciseInfo } from '../../../services';

const useMyExercise = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataExercise, setDataExercise] = useState([]);

  const fetchData = () => {
    setIsLoading(true);
    getExerciseInfo()
      .then(res => setDataExercise(res))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { dataExercise, isLoading };
};

export default useMyExercise;
