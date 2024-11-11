import './styles.scss'

const MOCK_DATA_EXERCISE = Array.from({ length: 31 }).map((_, index) => {
  return {
    id: index + 1,
    label: '家事全般（立位・軽い）',
    value: '26kcal',
    time: '10 min',
  }
})

const MyExercise = () => {
  return (
    <div className="my-exercise">
      <div className="my-exercise__top">
        <p>MY EXERCISE</p>
        <p>2021.05.21</p>
      </div>
      <div className="my-exercise__body">
        {MOCK_DATA_EXERCISE.map((element, index) => {
          if (index % 2 === 0) {
            const nextItem = MOCK_DATA_EXERCISE[index + 1]
            return (
              <div key={element.id} className="my-exercise__body__dup-item">
                <div className="my-exercise__body__dup-item__item">
                  <div className="my-exercise__body__dup-item__item__left">
                    <p>{element.label}</p>
                    <p>{element.value}</p>
                  </div>
                  <p>{element.time}</p>
                </div>
                {nextItem && (
                  <div className="my-exercise__body__dup-item__item">
                    <div className="my-exercise__body__dup-item__item__left">
                      <p>{nextItem.label}</p>
                      <p>{nextItem.value}</p>
                    </div>
                    <p>{nextItem.time}</p>
                  </div>
                )}
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default MyExercise
