import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../auth/Auth.module.css';
import { addArticle } from '../../store/actions/articleActions';

export class AddArticle extends Component {
  state = {
    title: '',
    description: ''
  };

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addArticle(this.state);
    this.props.history.push('/');
  };

  render() {
    return (
        <div className={`container ${styles.form}`}>
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text">Post new article</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="description">Description</label>
              <textarea className="materialize-textarea" id="description" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn pink">Post</button>
            </div>
          </form>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => {
      dispatch(addArticle(article));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddArticle);
