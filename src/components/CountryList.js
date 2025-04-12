import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import CountrySearch from "./CountrySearch";
import RegionFilter from "./RegionFilter";

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://countries-api-abhishek.vercel.app/countries");
        const data = await response.json();
        if (data.statusCode === 200) {
          setCountries(data.data);
          setFilteredCountries(data.data);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    let result = [...countries];

    if (searchTerm) {
      result = result.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedRegion !== "All") {
      result = result.filter(country => country.region === selectedRegion);
    }

    setFilteredCountries(result);
  }, [searchTerm, selectedRegion, countries]);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleRegionChange = useCallback((region) => {
    setSelectedRegion(region);
  }, []);

  return (
    <div>
      <CountrySearch onSearch={handleSearch} />
      <RegionFilter onRegionChange={handleRegionChange} />
      <div className="row">
        {filteredCountries.map((country, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={country.flag} className="card-img-top" alt={country.name} />
              <div className="card-body">
                <h5 className="card-title">{country.name}</h5>
                <p className="card-text">
                  Region: {country.region} <br />
                  Capital: {country.capital}
                </p>
                <Link to={`/country/${country.name}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryList;
