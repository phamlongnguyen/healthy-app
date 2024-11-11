import './styles.scss'

const MOCK_DATA_RECOMMENDED = [
  {
    title: 'RECOMMENDED COLUMN',
    text: 'オススメ',
  },
  {
    title: 'RECOMMENDED DIET',
    text: 'ダイエット',
  },
  {
    title: 'RECOMMENDED BEAUTY',
    text: '美容',
  },
  {
    title: 'RECOMMENDED HEALTH',
    text: '健康',
  },
]

const Recommended = () => {
  return (
    <div className="recommended">
      {MOCK_DATA_RECOMMENDED.map(e => {
        return (
          <div className="recommended__block" key={e.title}>
            <p>{e.title}</p>
            <p>{e.text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Recommended
