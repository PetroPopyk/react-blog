import React from 'react';

const ArticleDetails = (props) => {
  if (props.location.state) {
    const { article } = props.location.state;
    return (
        <div className="container section">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{article.title}</span>
              <p>{article.description}</p>
            </div>
            <div className="card-action grey-text">
              <div>Date</div>
            </div>
          </div>
        </div>
    );
  } else {
    return (
        <div className="container center-align">
          <h6>Article not found</h6>
        </div>
    );
  }
};


export default ArticleDetails;
