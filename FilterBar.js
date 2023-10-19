import React from 'react';
import './FilterBar.css';

const FilterBar = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className={('filter-bar', {'custom-class': true})}>
      <input
        type="text"
        name="title"
        value={filters.title}
        onChange={handleChange}
        placeholder="Filter by title"
        className="filter-input"
      />
      <input
        type="text"
        name="tag"
        value={filters.tag}
        onChange={handleChange}
        placeholder="Filter by tag"
        className="filter-input"
      />
      <input
        type="text"
        name="date"
        value={filters.date}
        onChange={handleChange}
        placeholder="Filter by date"
        className="filter-input"
      />
    </div>
  );
};

export default FilterBar;
