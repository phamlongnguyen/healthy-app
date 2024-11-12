import { randomInteger } from '../utils';
import { LIST_IMAGE_MEAL_HISTORY, LIST_TYPE_SESSION } from '../utils/constants';

export const getBodyMetricsData = async (monthStart = 6) => {
  const mockResponse = Array.from({ length: 12 }).map((_, index) => {
    const currentMonth = index + monthStart;
    return {
      data1: randomInteger(50, 100),
      data2: randomInteger(50, 100),
      month:
        (currentMonth > 12 ? (currentMonth - 12) % 12 : currentMonth) + '月',
    };
  });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockResponse);
    }, 300);
  });
};

export const getMealHistoryData = async page => {
  const mockResponse = Array.from({ length: 8 }).map((_, index) => {
    return {
      id: new Date().getTime() + index + page + 'meal',
      image:
        LIST_IMAGE_MEAL_HISTORY[
          randomInteger(0, LIST_IMAGE_MEAL_HISTORY.length - 1)
        ],
      date: '05.21',
      type: LIST_TYPE_SESSION[index % 4],
    };
  });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockResponse);
    }, 300);
  });
};
