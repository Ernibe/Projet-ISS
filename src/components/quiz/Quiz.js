import React from 'react'
import {QuizData} from './QuizData'
import Quiz from 'react-quiz-component'
import './Quiz.css'

function quiz() {
  return (
    <>
      <div className='QuizBack'>
        <Quiz quiz={QuizData} showInstantFeedback={true} continueTillCorrect={true} />
      </div>
    </>
  )
}

export default quiz