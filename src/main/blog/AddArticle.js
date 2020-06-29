import React, { Component } from 'react';
import styles from '../auth/Auth.module.css';

export class AddArticle extends Component {
  state = {
    title: '',
    description: ''
  };

  handleChange = (e) => {
    this.setState({
                    [e.target.id]: e.target.value
                  });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
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
              <textarea className='materialize-textarea' id="description" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn pink">Post</button>
            </div>
          </form>
        </div>
    );
  }
}

export default AddArticle;
