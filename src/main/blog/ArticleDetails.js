import React from 'react';

const ArticleDetails = (props) => {
  const id = props.match.params.id;
  return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Title {id}</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid assumenda doloribus ex explicabo illum laudantium
               nesciunt totam! Accusamus debitis deleniti dolorem ea itaque possimus, repellendus sequi similique soluta totam!</p>
          </div>
          <div className="card-action grey-text">
            <div>Date</div>
          </div>
        </div>
      </div>
  );
};

export default ArticleDetails;
