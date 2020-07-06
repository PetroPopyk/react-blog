import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
      <ul className="right">
        <li><NavLink to={'/add-article'}>New Article</NavLink></li>
        <li><NavLink to={'/'}>Log Out</NavLink></li>
        <li><NavLink to={'/'} className='btn btn-floating pink'>PP</NavLink></li>
      </ul>
  );
};

export default SignedInLinks;
