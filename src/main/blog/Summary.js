import React from 'react';

const Summary = ({article}) => {
  return (
      <div className="card z-depth-0">
        <div className="card-content">
          <span className='card-title'>{article.title}</span>
          <p>{article.description}</p>
        </div>
      </div>
  )
};

export default Summary;
