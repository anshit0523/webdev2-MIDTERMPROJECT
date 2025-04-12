import React from 'react';

function RegionFilter({ onRegionChange }) {
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const handleRegionChange = (e) => {
    onRegionChange(e.target.value);
  };

  return (
    <div className="mb-3">
      <label htmlFor="regionFilter" className="form-label">Filter by Region:</label>
      <select
        className="form-select"
        id="regionFilter"
        onChange={handleRegionChange}
        defaultValue="All"
      >
        {regions.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RegionFilter;
