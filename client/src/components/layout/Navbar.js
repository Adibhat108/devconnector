import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';

const NavBar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          <span className="hide-sm">Developers</span>
        </Link>
      </li>
      <li>
        <Link to="/posts">
          <span className="hide-sm">Posts</span>
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />
          {' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link onClick={() => { dispatch(logout()); }} to="/">
          <i className="fas fa-sign-out-alt" />
          {' '}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">
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
