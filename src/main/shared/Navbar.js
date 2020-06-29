import React from 'react';
import { Link } from 'react-router-dom';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

const Navbar = () => {
  return (
      <nav className="nav-wrapper">
        <div className="container">
          <Link to={'/'}>Home</Link>
          <SignedIn/>
          <SignedOut/>
        </div>
      </nav>
  );
};

export default Navbar;
