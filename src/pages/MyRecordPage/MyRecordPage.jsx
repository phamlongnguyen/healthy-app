import React from 'react'
import { ButtonGradient } from '../../components/common'
import './styles.scss'
import {
  EntryNavigationButton,
  BodyRecord,
  MyExercise,
  MyDiary,
} from '../../components'

const MyRecordPage = () => {
  return (
    <div className="my-record-page">
      <EntryNavigationButton />
      <BodyRecord />
      <MyExercise />
      <MyDiary />
    </div>
  )
}

export default MyRecordPage
