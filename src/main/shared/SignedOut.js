import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOut = () => {
  return (
      <ul className="right">
        <li><NavLink to={'/sign-up'}>Sign Up</NavLink></li>
        <li><NavLink to={'/sign-in'}>Login</NavLink></li>
      </ul>
  );
};

export default SignedOut;
