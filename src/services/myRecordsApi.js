import { randomInteger } from '../utils';

export const getExerciseInfo = async () => {
  const mockResponse = Array.from({ length: 31 }).map((_, index) => {
    return {
      id: index + 1,
      label: '家事全般（立位・軽い）',
      value: randomInteger(20, 50) + 'kcal',
      time: index + 1 + ' min',
    };
  });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockResponse);
    }, 300);
  });
};

export const getDiaryInfo = async page => {
  const mockResponse = Array.from({ length: 8 }).map((_, index) => {
    return {
      id: new Date().getTime() + index + page + 'diary',
      timestamp: '2021-05-17T14:43:11.551Z',
      title: '私の日記の記録が一部表示されます。',
      description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキスト',
    };
  });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockResponse);
    }, 300);
  });
};
