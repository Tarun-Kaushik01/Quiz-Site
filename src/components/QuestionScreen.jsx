import React from 'react'
import QuestionCard from './QuestionCard'
import UserDetails from './UserDetails'

function QuestionScreen({name, score, currentQuestion, setCurrentIndex, setScore}) {
  return (
    <>
      <QuestionCard question={currentQuestion} setCurrentIndex={setCurrentIndex} score={score} setScore={setScore} />
      <UserDetails name={name} score={score} />
    </>
  )
}

export default QuestionScreen
