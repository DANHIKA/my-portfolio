import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="mb-3">
      <div className="input-group">
        <span className="input-group-text content">
          <i className="material-icons">search</i>
        </span>
        <input
          type="text"
          className="form-control content" // Remove 'content' class
          style={{ height: 'calc(1.5em + 1rem + 2px)' }} // Increase the height
          placeholder="Search projects..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
