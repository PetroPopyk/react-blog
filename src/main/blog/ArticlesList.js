import React from 'react';
import Summary from './Summary';

const ArticlesList = ({articles}) => {
  return (
      <div className="articles-list section">
        { articles && articles.map(article => {
          return (
              <Summary article={article} key={article.id}/>
          )
        })}
      </div>
  );
};

export default ArticlesList;
