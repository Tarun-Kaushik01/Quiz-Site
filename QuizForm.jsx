import React from 'react';

function QuizForm(props) {
  const quizStart = () => {
    const quizData = {
      name: props.name,
      startTime: new Date().toLocaleString(),
      endTime: null,
      score: 0
    };
    localStorage.setItem("quizData", JSON.stringify(quizData));

    props.setQuizStarted(true);
  };

  return (
    <div className='quiz-card'>
      <h3>Hello <span>{props.name}</span></h3>
      <h2>Ready to start the quiz?</h2>
      <button className="primary-btn" onClick={quizStart}>Start Quiz</button>
    </div>
  );
}

export default QuizForm;
