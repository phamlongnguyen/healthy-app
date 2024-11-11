import React from 'react'
import { ButtonGradient } from '../../components/common'
import './styles.scss'
import { EntryNavigationButton } from '../../components'

const MyRecordPage = () => {
  return (
    <div className="my-record-page">
      <EntryNavigationButton />
      <div className="my-record-page__button">
        <ButtonGradient label="自分の日記をもっと見る" />
      </div>
    </div>
  )
}

export default MyRecordPage
