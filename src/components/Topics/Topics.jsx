import { format, parseISO } from 'date-fns'
import Column1Jpg from '../../assets/images/column-1.jpg'
import Column2Jpg from '../../assets/images/column-2.jpg'
import Column3Jpg from '../../assets/images/column-3.jpg'
import Column4Jpg from '../../assets/images/column-4.jpg'
import Column5Jpg from '../../assets/images/column-5.jpg'
import Column6Jpg from '../../assets/images/column-6.jpg'
import Column7Jpg from '../../assets/images/column-7.jpg'
import Column8Jpg from '../../assets/images/column-8.jpg'
import './styles.scss'

const MOCK_DATA_TOPICS = [
  {
    id: 1,
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べるメリ',
    tags: ['魚料理', ' 和食', 'DHA'],
    image: Column1Jpg,
    timestamp: '2021-05-17T14:43:11.551Z',
  },
  {
    id: 2,
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べるメリ',
    tags: ['魚料理', ' 和食', 'DHA'],
    image: Column2Jpg,
    timestamp: '2021-05-17T14:43:11.551Z',
  },
  {
    id: 3,
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べるメリ',
    tags: ['魚料理', ' 和食', 'DHA'],
    image: Column3Jpg,
    timestamp: '2021-05-17T14:43:11.551Z',
  },
  {
    id: 4,
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べるメリ',
    tags: ['魚料理', ' 和食', 'DHA'],
    image: Column4Jpg,
    timestamp: '2021-05-17T14:43:11.551Z',
  },
  {
    id: 5,
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べるメリ',
    tags: ['魚料理', ' 和食', 'DHA'],
    image: Column5Jpg,
    timestamp: '2021-05-17T14:43:11.551Z',
  },
  {
    id: 6,
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べるメリ',
    tags: ['魚料理', ' 和食', 'DHA'],
    image: Column6Jpg,
    timestamp: '2021-05-17T14:43:11.551Z',
  },
  {
    id: 7,
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べるメリ',
    tags: ['魚料理', ' 和食', 'DHA'],
    image: Column7Jpg,
    timestamp: '2021-05-17T14:43:11.551Z',
  },
  {
    id: 8,
    title:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べるメリ',
    tags: ['魚料理', ' 和食', 'DHA'],
    image: Column8Jpg,
    timestamp: '2021-05-17T14:43:11.551Z',
  },
]

const Topics = () => {
  return (
    <div className="topics">
      {MOCK_DATA_TOPICS.map(topic => {
        return (
          <div className="topics__item" key={topic.id}>
            <div
              style={{ backgroundImage: `url(${topic.image})` }}
              className="topics__item__img"
            >
              <p>{format(parseISO(topic.timestamp), 'yyyy.MM.dd  HH:mm')}</p>
            </div>

            <p className="topics__item__title">{topic.title}</p>
            <div className="topics__item__tags">
              {topic.tags.map(tag => (
                <span key={tag + topic.id}>#{tag}</span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Topics
