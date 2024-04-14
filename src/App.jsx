import React from 'react';
import SearchBar from './SearchBar';

function App() {
  const handleSearch = (query) => {
    alert('Search query: ' + query);
    // Perform search operation with the query...
  };

  return (
    <div className="App">
      <h1>My Search App</h1>
      <SearchBar onSearch={handleSearch} />
      {/* Other components or content */}
    </div>
  );
}

export default App;
