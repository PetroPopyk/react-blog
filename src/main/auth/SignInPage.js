import React, { Component } from 'react';
import styles from './Auth.module.css';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Field, reduxForm } from 'redux-form';

export class SignInPage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.props.formState.signInForm.values);
  };

  render() {
    const {authError} = this.props;
    return (
        <div className={`container ${styles.form}`}>
          <form name={'signInForm'} onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <Field name={'email'} component={'input'} type={'email'} required/>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <Field name={'password'} component={'input'} type={'password'} required/>
            </div>
            <div className="input-field">
              <button className="btn pink">Sign In</button>
              <div className="right">
                {authError ? <p className="red-text">{authError}</p> : null}
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
    signIn: (credentials) => dispatch(signIn(credentials))
  };
};

export default reduxForm(
    {
      form: 'signInForm'
    }
)(connect(mapStateToProps, mapDispatchToProps)(SignInPage));
