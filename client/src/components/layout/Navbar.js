/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';

const NavBar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    console.log('ddddddddddddddd');
    console.log(isAuthenticated);
    console.log(loading);
  }, []);
  const authLinks = (
    <ul>
      <li>
        <Link onClick={() => { dispatch(logout()); }} to="#!">
          <i className="fas fas-sign-out-alt" />
          {' '}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="!#">
          Developers
        </Link>
      </li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" />
          DevConnector
        </Link>
      </h1>
      {!loading && (isAuthenticated ? authLinks : guestLinks)}
    </nav>
  );
};

export default NavBar;
