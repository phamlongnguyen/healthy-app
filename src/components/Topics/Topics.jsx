import { format, parseISO } from 'date-fns';

import './styles.scss';
import useFetchDataWithLoadMore from '../../hooks/useFetchDataWithLoadMore';
import { getTopicsData } from '../../services';
import { ButtonGradient } from '../common';
import { CircularProgress } from '@mui/material';

const Topics = () => {
  const { isLoading, isLoadingButton, data, loadMore } =
    useFetchDataWithLoadMore({ funcFetchData: getTopicsData });

  return (
    <div className="topics">
      {isLoading ? (
        <div className="topics__loading">
          <CircularProgress />
        </div>
      ) : (
        <div className="topics__body">
          {data.map((topic, index) => {
            return (
              <div className="topics__body__item" key={topic.id + index}>
                <div
                  style={{ backgroundImage: `url(${topic.image})` }}
                  className="topics__body__item__img"
                >
                  <p>
                    {format(parseISO(topic.timestamp), 'yyyy.MM.dd  HH:mm')}
                  </p>
                </div>

                <p className="topics__body__item__title">{topic.title}</p>
                <div className="topics__body__item__tags">
                  {topic.tags.map(tag => (
                    <span key={tag + topic.id}>#{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="my-diary__button">
        <ButtonGradient
          label="コラムをもっと見る"
          onClick={loadMore}
          loading={isLoadingButton}
        />
      </div>
    </div>
  );
};

export default Topics;
