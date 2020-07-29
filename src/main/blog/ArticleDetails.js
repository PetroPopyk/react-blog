import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

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
            <div className="card-content" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <div>
                <span className="card-title">{article.title}</span>
                <p>{article.description}</p>
              </div>
              { props.profile.isAdmin ? <Link to={{pathname: `/edit-article/${article.id}`, state: {article: article}}} key={article.id}>
                <button className="btn pink right" style={{marginLeft: '60px'}}>Edit</button>
              </Link> : null }
            </div>
            <div className="card-action grey-text">
              <div>{moment(article.createdAt.toDate()).calendar()}</div>
            </div>
          </div>
        </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    article: state.firestore.data.article,
    profile: state.firebase.profile
  };
};

export default compose(connect(mapStateToProps),
                       firestoreConnect(props => { return [{collection: 'articles', doc: props.match.params.id, storeAs: 'article'}]; }))(
    ArticleDetails);
