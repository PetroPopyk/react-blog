import React, {Component} from 'react';
import ArticlesList from '../blog/ArticlesList';

class Dashboard extends Component{
  render() {
    return (
        <div className="dashboard container">
          <div className="row">
            <ArticlesList/>
          </div>
        </div>
    )
  }
}

export default Dashboard;
