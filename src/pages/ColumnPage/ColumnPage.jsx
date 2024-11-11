import React from 'react'
import { ButtonGradient } from '../../components/common'
import './styles.scss'
import { Recommended, Topics } from '../../components'

const ColumnPage = () => {
  return (
    <div className="column-page">
      <Recommended />
      <Topics />
      <div className="column-page__button">
        <ButtonGradient label="コラムをもっと見る" />
      </div>
    </div>
  )
}

export default ColumnPage
