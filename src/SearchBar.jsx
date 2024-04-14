import React, { useState } from 'react';
import { Input } from '@shadcn/ui';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        size="large"
      />
      <button type="submit" style={{ marginLeft: '10px' }}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
