
import React, { useState } from 'react';
import './AddQuestionForm.css';

const AddQuestionForm = ({ onAddQuestion }) => {
  const [newQuestion, setNewQuestion] = useState({ title: '', description: '', tag: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion({ ...newQuestion, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddQuestion(newQuestion);
    setNewQuestion({ title: '', description: '', tag: '' });
  };

  return (
    <form className="add-question-form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        name="title"
        value={newQuestion.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        className="form-input"
        type="text"
        name="description"
        value={newQuestion.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        className="form-input"
        type="text"
        name="tag"
        value={newQuestion.tag}
        onChange={handleChange}
        placeholder="Tag"
        required
      />
      <button className="form-button" type="submit">Add Question</button>
    </form>
  );
};

export default AddQuestionForm;
