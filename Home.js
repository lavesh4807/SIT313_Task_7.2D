
import React, { useState } from 'react';
import QuestionList from './QuestionList';
import FilterBar from './FilterBar';
import AddQuestionForm from './AddQuestionForm';
import { Link, Outlet } from 'react-router-dom';
import './DisplayQuestion.css';
import { useData } from "./Data";
import './Home.css';

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [filters, setFilters] = useState({ date: '', tag: '', title: '' });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleDeleteQuestion = (questionId) => {
    setQuestions(questions.filter((question) => question.id !== questionId));
  };

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <>
  
    <div className="Home">
      <h1>Find Questions</h1>
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      <AddQuestionForm onAddQuestion={handleAddQuestion} />
      <QuestionList
        questions={questions}
        filters={filters}
        onDeleteQuestion={handleDeleteQuestion}
        />
    </div>
        </>
  );
};

export default Home;
