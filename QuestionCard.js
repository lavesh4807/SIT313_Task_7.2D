import React from 'react';

function QuestionCard({ question }) {
  return (
    <div className="question-card">
      <h3>Title: {question.title}</h3>
      <p>Description: {question.describeQuestion}</p>
      <p>Tags: {question.tagQuestion}</p>
    </div>
  );
}

export default QuestionCard;
