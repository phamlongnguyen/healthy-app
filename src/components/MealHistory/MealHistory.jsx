import './styles.scss';
import { ButtonGradient } from '../common';
import useFetchDataWithLoadMore from '../../hooks/useFetchDataWithLoadMore';
import { getMealHistoryData } from '../../services';
import { CircularProgress } from '@mui/material';
const MealHistory = () => {
  const { isLoading, isLoadingButton, data, loadMore } =
    useFetchDataWithLoadMore({ funcFetchData: getMealHistoryData });
  return (
    <div className="meat-history">
      {isLoading ? (
        <div className="meat-history__loading">
          <CircularProgress />
        </div>
      ) : (
        <div className="meat-history__body">
          {data.map((item, index) => {
            return (
              <div
                key={item.id + index}
                className="meat-history__body__item"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <p>{`${item.date}.${item.type}`}</p>
              </div>
            );
          })}
        </div>
      )}

      <div className="my-diary__button">
        <ButtonGradient
          label="自分の日記をもっと見る"
          onClick={loadMore}
          loading={isLoadingButton}
        />
      </div>
    </div>
  );
};

export default MealHistory;
