import classNames from 'classnames';
import { CircularProgress } from '@mui/material';
import useBodyRecord from './hook/useBodyRecord';
import { OPTIONS_CHART } from './constants';
import { LineChart } from '../common';
import './styles.scss';

const BodyRecord = () => {
  const { infoChart, isLoading, tabSelected, handleChangeTab } =
    useBodyRecord();

  return (
    <div className="body-record">
      <div className="body-record__top">
        <p>BODY RECORD</p>
        <p>2021.05.21</p>
      </div>
      {isLoading ? (
        <div className="body-record__top__loading">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <LineChart infoChart={infoChart} />
      )}
      <div className="body-record__bottom">
        {OPTIONS_CHART.map(option => {
          return (
            <div
              key={option.id}
              className={classNames('body-record__bottom__item', {
                active: option.id === tabSelected,
              })}
              onClick={() => {
                handleChangeTab(option);
              }}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BodyRecord;
