import React, { Component } from 'react';
import styles from './Auth.module.css';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

export class SignInPage extends Component {
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
    this.props.signIn(this.state);
  };

  render() {
    const { authError } = this.props;
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
              <button className="btn pink">Sign In</button>
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
    signIn: (credentials) => dispatch(signIn(credentials))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
