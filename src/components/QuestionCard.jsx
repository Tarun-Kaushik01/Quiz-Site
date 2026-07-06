import React, { useEffect, useState } from 'react'

function QuestionCard({question, setCurrentIndex, score, setScore}) {
  if (!question){
    const quizData = JSON.parse(localStorage.getItem("quizData"));
    quizData.score = score;
    quizData.endTime = new Date().toLocaleString();
    localStorage.setItem("quizData", JSON.stringify(quizData));
    return;
  }

  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
  // Reset timer for every new question
  setTimeLeft(300);

  const interval = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        clearInterval(interval);

        // Move to next question
        setCurrentIndex((index) => index + 1);

        return 300;
      }

      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [question]);
 

  const handleClick = (option) => {
    //Prevent Multiple clicks
    if(selectedOption) return;

    setSelectedOption(option);

    if(option === question.answer){
      setScore(prev => prev+1);
    }

    setTimeout(() => {
      setCurrentIndex(prev => prev+1);
      setSelectedOption(null);
    }, 2000)
    
  }
  return (
    <div className='question-card'>
      <div className='timer'>{timeLeft}</div>
      <h3>{question.question}</h3>
      <ul className='option-container'>
        {question.options.map((option) => (
          <button 
            key={option}
            onClick={() => {handleClick(option)}}
            disabled={selectedOption? true:false}
            className={
              selectedOption === null
              ? ""
              : option === question.answer
              ? "correct"
              : option === selectedOption 
              ? "wrong"
              : ""
            }
          >
            {option}
          </button>
        ))}
      </ul>
    </div>
  )
}

export default QuestionCard
