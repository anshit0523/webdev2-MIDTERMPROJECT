import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Borders from './Borders';

function CountryDetails() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      const countryToFetch = countryName || 'Afghanistan';
      
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`https://countries-api-abhishek.vercel.app/countries/${countryToFetch}`);
        if (!response.ok) throw new Error('Failed to fetch country data');

        const data = await response.json();
        if (data.statusCode === 200 && data.data) {
          setCountry(data.data);
        } else {
          throw new Error('No country data found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    fetchCountryData();
  }, [countryName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!country) return <p>No country data found</p>;

  return (
    <div className="card-custom mb-4">
      <div className="row g-4 align-items-center">
        <div className="col-md-6">
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            className="flag-img w-100"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">{country.name}</h2>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Region:</strong> {country.region} ({country.subregion})</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
          <p><strong>Coordinates:</strong> {country.coordinates.latitude}°, {country.coordinates.longitude}°</p>
          <p>
            <strong>Languages:</strong>{" "}
            {country.languages?.map((lang, index) => (
              <span key={index} className="badge-custom">{lang}</span>
            ))}
          </p>
          
          <p><strong>Currency:</strong> {country.currency}</p>
          <p><strong>Timezones:</strong> {country.timezones?.join(', ')}</p>
        </div>
      </div>

      {country.borders?.length > 0 && (
        <div className="mt-5">
          <h4 className="mb-3">Bordering Countries</h4>
          <Borders borders={country.borders} />
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
