import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../auth/Auth.module.css';
import { editArticle } from '../../store/actions/articleActions';

export class EditArticle extends Component {
  state = {...this.props.location.state.article};

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editArticle(this.state);
    this.props.history.push(`/article/${this.state.id}`);
  };

  render() {
    const article = this.state;
    return (
        <div className={`container ${styles.form}`}>
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text">Edit article</h5>
            <div className="input-field">
              <label htmlFor="title" className={'active'}>Title</label>
              <input type="text" id="title" onChange={this.handleChange} value={article.title}/>
            </div>
            <div className="input-field">
              <label htmlFor="description" className={'active'}>Description</label>
              <textarea style={{  minHeight: '16rem' }} className="materialize-textarea" id="description" onChange={this.handleChange} value={article.description}/>
            </div>
            <div className="input-field">
              <button className="btn pink">Edit</button>
            </div>
          </form>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editArticle: (article) => {
      dispatch(editArticle(article));
    }
  };
};

export default connect(null, mapDispatchToProps)(EditArticle);
