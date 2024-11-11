import { format, parseISO } from 'date-fns'
import './styles.scss'
import { ButtonGradient } from '../common'

const MOCK_DATA_MY_DIARY = Array.from({ length: 8 }).map((_, index) => ({
  id: index + 1,
  timestamp: '2021-05-17T14:43:11.551Z',
  title: '私の日記の記録が一部表示されます。',
  description:
    'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキスト',
}))

const MyDiary = () => {
  return (
    <div className="my-diary">
      <p className="my-diary__title">MY DIARY</p>
      <div className="my-diary__body">
        {MOCK_DATA_MY_DIARY.map(item => {
          return (
            <div className="my-diary__body__item">
              <p className="my-diary__body__item__date">
                {format(parseISO(item.timestamp), 'yyyy.MM.dd')}
              </p>
              <p className="my-diary__body__item__date">
                {format(parseISO(item.timestamp), 'HH:mm')}
              </p>
              <p className="my-diary__body__item__title">{item.title}</p>
              <p className="my-diary__body__item__des">{item.description}</p>
            </div>
          )
        })}
      </div>
      <div className="my-diary__button">
        <ButtonGradient label="自分の日記をもっと見る" />
      </div>
    </div>
  )
}

export default MyDiary
