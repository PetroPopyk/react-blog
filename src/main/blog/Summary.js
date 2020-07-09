import React from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../../store/actions/articleActions';

const Summary = ({article, deletePost, profile}) => {
  const handleDelete = (e) => {
    e.preventDefault();
    deletePost(article.id);
  };
  return (
      <div className="card z-depth-0">
        <div className="card-content" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div>
            <span className="card-title">{article.title}</span>
            <p>{article.description}</p>
          </div>
          { profile.isAdmin ? <button className="btn pink right" onClick={handleDelete}>Delete</button> : null }
        </div>
      </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deleteArticle(id))
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
