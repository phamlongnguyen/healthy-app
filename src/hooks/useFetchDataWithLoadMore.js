import { useCallback, useEffect, useState } from 'react';

const useFetchDataWithLoadMore = ({ funcFetchData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const fetchData = useCallback(
    ({ pageIndex = 0, isLoadingWhenFetched = true }) => {
      isLoadingWhenFetched && setIsLoading(true);
      funcFetchData(pageIndex)
        .then(res => {
          setData(prev => [...prev, ...res]);
        })
        .finally(() => {
          isLoadingWhenFetched && setIsLoading(false);
          setIsLoadingButton(false);
        });
    },
    [funcFetchData]
  );

  const loadMore = () => {
    setIsLoadingButton(true);
    fetchData({ pageIndex: page + 1, isLoadingWhenFetched: false });
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    fetchData({ isLoadingWhenFetched: true });
  }, [fetchData]);

  return { isLoading, isLoadingButton, data, loadMore };
};
export default useFetchDataWithLoadMore;
