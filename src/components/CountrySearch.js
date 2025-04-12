import React, { useState, useEffect } from "react";

function CountrySearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch(searchTerm.trim());
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [searchTerm, onSearch]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="mb-3">
      <label htmlFor="countrySearch" className="form-label">
        Search for a country:
      </label>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="countrySearch"
          placeholder="Enter country name..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        {searchTerm && (
          <button className="btn btn-outline-secondary" type="button" onClick={clearSearch}>
            ×
          </button>
        )}
      </div>
    </div>
  );
}

export default CountrySearch;
