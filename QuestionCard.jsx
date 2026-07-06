import React, { useEffect, useState } from 'react';

function QuestionCard({ question, setCurrentIndex, score, setScore }) {
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
  }, [question, setCurrentIndex]);

  const handleClick = (option) => {
    // Prevent Multiple clicks
    if (selectedOption) return;

    setSelectedOption(option);

    if (option === question.answer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
    }, 2000);
  };

  return (
    <div className='question-card'>
      <div className='timer-container'>
        <div className='timer'>⏱️ {timeLeft}s</div>
      </div>
      <h3>{question.question}</h3>
      <div className='option-container'>
        {question.options.map((option) => (
          <button 
            key={option}
            onClick={() => handleClick(option)}
            disabled={selectedOption ? true : false}
            className={`option-btn ${
              selectedOption === null
                ? ""
                : option === question.answer
                ? "correct"
                : option === selectedOption 
                ? "wrong"
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
