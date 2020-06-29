import React, { Component } from 'react';
import styles from './Auth.module.css';

export class SignedInPage extends Component {
  state = {
    email: '',
    password: ''
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
            <h5 className="grey-text">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn pink">Login</button>
            </div>
          </form>
        </div>
    );
  }
}

export default SignedInPage;
