import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  const { auth, profile } = props;
  return (
      <ul className="right">
        { (auth.uid && profile.isAdmin) ? <li><NavLink to={'/add-article'}>New Article</NavLink></li> : null }
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><a className="btn btn-floating pink" style={{ pointerEvents: 'none' }}>{`${profile.firstName[0]}${profile.lastName[0]}`}</a></li>
      </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
