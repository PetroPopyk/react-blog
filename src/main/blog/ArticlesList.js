import React from 'react';
import Summary from './Summary';
import { Link } from 'react-router-dom';

const ArticlesList = ({articles}) => {
  return (
      <div className="articles-list section">
        {articles && articles.map(article => {
          return (
              <Link to={{ pathname: `/article/${article.id}`, state: { article: article }}} key={ article.id }>
                <Summary article={article}/>
              </Link>
          );
        })}
      </div>
  );
};

export default ArticlesList;
