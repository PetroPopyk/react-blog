import React, {Component} from 'react';
import ArticlesList from '../blog/ArticlesList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
    const { articles } = this.props;
    return (
        <div className="dashboard container">
          <div className="row">
            <ArticlesList articles={articles}/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.firestore.ordered.articles
  }
};

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'articles' }]))(Dashboard);
