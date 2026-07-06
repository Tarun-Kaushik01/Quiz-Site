import React, { useEffect, useState } from 'react'
import QuizForm from './components/QuizForm';
import UserForm from './components/UserForm';
import QuestionCard from "./components/QuestionCard";
import "./index.css";
import QuestionScreen from './components/QuestionScreen';
import questions from '../questions';


function App() {
  const [user, setUser] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [userChoice, setUserChoice] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledQuestion, setShuffledQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = shuffledQuestion[currentIndex]

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestion(shuffled);
  }, [])

  
  

  return (
    <div className='page-container'>
      <h1 className='title'>Wecome To Quiz Centre</h1>
      {!user ? (
        <UserForm setUser={setUser} />
      ) : !quizStarted ? (
        <QuizForm
          name={user}
          setQuizStarted={setQuizStarted}
        />
      ) : (
        <QuestionScreen name={user} score={score} currentQuestion={currentQuestion} setCurrentIndex={setCurrentIndex} setScore={setScore} /> 
      )}


    </div>
  )
}

export default App
