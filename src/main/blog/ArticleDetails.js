import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

const ArticleDetails = (props) => {
  if (!props.location.state && !props.article) {
      return (
          <div className="container center-align">
            <h6>Article not found</h6>
          </div>
      );
  } else {
    const article = props.location.state ? props.location.state.article : props.article;
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
  }
};

const mapStateToProps = (state) => {
  return {
    article: state.firestore.data.article
  }
};

export default compose(connect(mapStateToProps),
                       firestoreConnect(props => { return [{collection: 'articles', doc: props.match.params.id, storeAs: 'article'}]; }))(ArticleDetails);
