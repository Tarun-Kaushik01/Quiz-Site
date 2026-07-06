import React from 'react';

function ResultScreen({ name, score, totalQuestions, onRestart }) {
  const quizData = JSON.parse(localStorage.getItem("quizData")) || {};
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Custom message based on score
  let message = "Good effort!";
  if (percentage === 100) message = "Perfect Score! You are a master! 🏆";
  else if (percentage >= 70) message = "Great job! You know your stuff! 🌟";
  else if (percentage >= 50) message = "Well done! Keep practicing! 📚";

  return (
    <div className="quiz-card result-card">
      <div className="result-badge">🎉 Quiz Completed</div>
      <h3>Congratulations, {name}!</h3>
      <p className="result-message">{message}</p>
      
      <div className="score-circle">
        <span className="score-num">{score}</span>
        <span className="score-total">/ {totalQuestions}</span>
      </div>

      <div className="result-details">
        <div className="detail-item">
          <span>Started:</span>
          <span>{quizData.startTime || 'Just now'}</span>
        </div>
        <div className="detail-item">
          <span>Finished:</span>
          <span>{quizData.endTime || 'Just now'}</span>
        </div>
      </div>
      
      <button className="primary-btn" onClick={onRestart}>Play Again</button>
    </div>
  );
}

export default ResultScreen;
