import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth } = props;
  const userLinks = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;
  return (
      <nav className="nav-wrapper">
        <div className="container">
          <Link to={'/'}>Home</Link>
          { userLinks }
        </div>
      </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
