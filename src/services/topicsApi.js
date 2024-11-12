import { randomInteger } from '../utils';
import { LIST_IMAGE_TOPICS } from '../utils/constants';

export const getTopicsData = async page => {
  const mockResponse = Array.from({ length: 8 }).map((_, index) => {
    return {
      id: new Date().getTime() + index + page + 'topic',
      title:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べるメリ',
      tags: ['魚料理', ' 和食', 'DHA'],
      timestamp: '2021-05-17T14:43:11.551Z',
      image: LIST_IMAGE_TOPICS[randomInteger(0, LIST_IMAGE_TOPICS.length - 1)],
    };
  });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockResponse);
    }, 300);
  });
};
