import React, { Component } from 'react';
import styles from './Auth.module.css';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

export class SignUpPage extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { authError } = this.props;
    return (
        <div className={`container ${styles.form}`}>
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn pink">Sign Up</button>
              <div className="right">
                { authError ? <p className='red-text'>{authError}</p> : null }
              </div>
            </div>
          </form>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
