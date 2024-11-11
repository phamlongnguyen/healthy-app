import { useState } from 'react'
import { LineChart } from '../common'
import './styles.scss'
import classNames from 'classnames'

const OPTIONS = [
  { id: 'june', label: '日' },
  { id: 'july', label: '週' },
  { id: 'august', label: '月' },
  { id: 'september', label: '年' },
]

const BodyRecord = () => {
  const [tabSelected, setTabSelected] = useState(OPTIONS[0]?.id)

  return (
    <div className="body-record">
      <div className="body-record__top">
        <p>BODY RECORD</p>
        <p>2021.05.21</p>
      </div>
      <LineChart />
      <div className="body-record__bottom">
        {OPTIONS.map(option => {
          return (
            <div
              key={option.id}
              className={classNames('body-record__bottom__item', {
                active: option.id === tabSelected,
              })}
              onClick={() => setTabSelected(option.id)}
            >
              {option.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BodyRecord
