import React from 'react';

function Flag({ flag, alt }) {
  return <img src={flag} alt={alt} className="flag-img" />;
}

export default Flag;
