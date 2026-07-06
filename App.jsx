import React, { useEffect, useState } from 'react';
import QuizForm from './components/QuizForm';
import UserForm from './components/UserForm';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import questions from '../questions';
import "./index.css";

function App() {
  const [user, setUser] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledQuestion, setShuffledQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = shuffledQuestion[currentIndex];
  const quizFinished = quizStarted && shuffledQuestion.length > 0 && currentIndex >= shuffledQuestion.length;

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestion(shuffled);
  }, []);

  // Save score and end time to localStorage when quiz finishes
  useEffect(() => {
    if (quizFinished) {
      const quizData = JSON.parse(localStorage.getItem("quizData")) || {};
      quizData.score = score;
      quizData.endTime = new Date().toLocaleString();
      localStorage.setItem("quizData", JSON.stringify(quizData));
    }
  }, [quizFinished, score]);

  const handleRestart = () => {
    setUser("");
    setQuizStarted(false);
    setScore(0);
    setCurrentIndex(0);
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestion(shuffled);
  };

  return (
    <div className='page-container'>
      <h1 className='title'>Welcome to Quiz Centre</h1>
      {!user ? (
        <UserForm setUser={setUser} />
      ) : !quizStarted ? (
        <QuizForm
          name={user}
          setQuizStarted={setQuizStarted}
        />
      ) : quizFinished ? (
        <ResultScreen
          name={user}
          score={score}
          totalQuestions={shuffledQuestion.length}
          onRestart={handleRestart}
        />
      ) : (
        <QuestionScreen
          name={user}
          score={score}
          currentQuestion={currentQuestion}
          setCurrentIndex={setCurrentIndex}
          setScore={setScore}
        /> 
      )}
    </div>
  );
}

export default App;
