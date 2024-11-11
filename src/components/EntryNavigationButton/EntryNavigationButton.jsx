import './styles.scss'
import RecordImg1 from '../../assets/images/MyRecommend-1.jpg'
import RecordImg2 from '../../assets/images/MyRecommend-2.jpg'
import RecordImg3 from '../../assets/images/MyRecommend-3.jpg'

const MOCK_DATA_RECORDS = [
  {
    id: 1,
    title: 'BODY RECORD',
    text: '自分のカラダの記録',
    image: RecordImg1,
  },
  {
    id: 2,
    title: 'MY EXERCISE',
    text: '自分の運動の記録',
    image: RecordImg2,
  },
  {
    id: 3,
    title: 'MY DIARY',
    text: '自分の日記',
    image: RecordImg3,
  },
]

const EntryNavigationButton = () => {
  return (
    <div className="entry-navigation-button">
      {MOCK_DATA_RECORDS.map(record => {
        return (
          <div key={record.id} className="entry-navigation-button__item">
            <div className="entry-navigation-button__item__box">
              <div
                style={{ backgroundImage: `url(${record.image})` }}
                className="entry-navigation-button__item__box__image"
              />
              <div className="entry-navigation-button__item__box__info">
                <p>{record.title}</p>
                <p>{record.text}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default EntryNavigationButton
