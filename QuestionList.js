
import './Home.css';
import React from 'react';

const QuestionCard = ({ question, onDelete }) => {
  const handleDelete = () => {
    onDelete(question.id);
  };

  return (
    <div className="question-card">
      <h3>{question.title}</h3>
      <p>{question.description}</p>
      <p>{question.tag}</p>
      <p>{question.date}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const QuestionList = ({ questions, filters, onDeleteQuestion }) => {
  const filteredQuestions = questions.filter((question) => {
    const titleMatches = question.title.includes(filters.title);
    const tagMatches = question.tag.includes(filters.tag);
    const dateMatches = question.date.includes(filters.date);

    return titleMatches && tagMatches && dateMatches;
  });

  return (
    <div className="question-list">
      {filteredQuestions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          onDelete={onDeleteQuestion}
        />
      ))}
    </div>
  );
};

export default QuestionList;
