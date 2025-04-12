import React from 'react';

function Header({ onSearch, onRegionChange, onPopulationFilterChange }) {
  return (
    <header className="py-3 bg-dark text-white">
      <div className="container">
        <h1 className="mb-3">Country Information</h1>
        {/* Add any search or filtering options here */}
      </div>
    </header>
  );
}

export default Header;
