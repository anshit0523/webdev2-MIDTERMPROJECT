import React from 'react';
import { Link } from 'react-router-dom';

function Borders({ borders }) {
  return (
    <div className="d-flex flex-wrap">
      {borders.map((border, index) => (
        <div key={index} className="m-2">
          <Link to={`/country/${border}`} className="btn btn-outline-primary">
            {border}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Borders;
