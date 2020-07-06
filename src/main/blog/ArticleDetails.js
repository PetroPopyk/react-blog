import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ArticleDetails = ({article}) => {
  if (article) {
    return (
        <div className="container section">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{article.title}</span>
              <p>{article.description}</p>
            </div>
            <div className="card-action grey-text">
              <div>Date</div>
              <div>Author: {article.authorFirstName} {article.authorLastName}</div>
            </div>
          </div>
        </div>
    );
  } else {
    return (
        <div className="container center-align">
          <h6>Post not found</h6>
        </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    article: state.firestore.data['article']
  };
};

export default compose(connect(mapStateToProps),
                       firestoreConnect(props => [{collection: 'articles', doc: props.match.params.id, storeAs: 'article'}]))(
    ArticleDetails);
