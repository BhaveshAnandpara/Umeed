import React, { useState } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="SearchBar">
      <input className='PlaceholderBar'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        
      />
      <button className='BtnSubmit' type="submit">Search</button>
      </div>
   

  );
};

export default SearchBar;
