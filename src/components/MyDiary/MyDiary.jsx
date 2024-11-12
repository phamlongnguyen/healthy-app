import { format, parseISO } from 'date-fns';
import './styles.scss';
import { ButtonGradient } from '../common';
import { CircularProgress } from '@mui/material';
import { getDiaryInfo } from '../../services';
import useFetchDataWithLoadMore from '../../hooks/useFetchDataWithLoadMore';

const MyDiary = () => {
  const { isLoading, isLoadingButton, data, loadMore } =
    useFetchDataWithLoadMore({ funcFetchData: getDiaryInfo });

  return (
    <div className="my-diary">
      <p className="my-diary__title">MY DIARY</p>
      {isLoading ? (
        <div className="my-diary__loading">
          <CircularProgress />
        </div>
      ) : (
        <div className="my-diary__body">
          {data?.map((item, index) => {
            return (
              <div className="my-diary__body__item" key={item.id + index}>
                <p className="my-diary__body__item__date">
                  {format(parseISO(item.timestamp), 'yyyy.MM.dd')}
                </p>
                <p className="my-diary__body__item__date">
                  {format(parseISO(item.timestamp), 'HH:mm')}
                </p>
                <p className="my-diary__body__item__title">{item.title}</p>
                <p className="my-diary__body__item__des">{item.description}</p>
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

export default MyDiary;
