import React, { Component } from 'react';
import styles from './Auth.module.css';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { Field, reduxForm } from 'redux-form';

export class SignUpPage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.props.formState.signUpForm.values);
  };

  render() {
    const { authError } = this.props;
    return (
        <div className={`container ${styles.form}`}>
          <form name={'signUpForm'} onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <Field name={'email'} component={'input'} type={'email'} required/>
            </div>
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <Field name={'firstName'} component={'input'} type={'text'} required/>
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <Field name={'lastName'} component={'input'} type={'text'} required/>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <Field name={'password'} component={'input'} type={'password'} required/>
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
    authError: state.auth.authError,
    formState: state.form
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user))
  }
};

export default reduxForm(
    {
      form: 'signUpForm'
    }
)(connect(mapStateToProps, mapDispatchToProps)(SignUpPage));
