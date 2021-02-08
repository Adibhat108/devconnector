import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
// import { setAlert } from '../../actions/alert';
import {
  SET_ALERT,
  // REMOVE_ALERT
} from '../../actions/types';

const Register = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const {
    name, email, password, password2,
  } = formData;

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      // props.setAlert('Passwords do not match', 'danger');
      dispatch({
        type: SET_ALERT,
        payload: { msg: 'Passwords do not match', alertType: 'danger' },
      });
      // dispatch({

      // });
    } else {
      console.log('SUCCESS');
    }
  };

  return (
    <>
      <p className="lead">
        <i className="fas fa-user" />
        {' '}
        Create Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onchange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={onchange}
            value={email}
            required
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            onChange={onchange}
            value={password}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            onChange={onchange}
            value={password2}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account?
        {' '}
        <Link to="/login">Sign In</Link>
      </p>
    </>
  );
};

// when using action, in order to use it, pass into connect.
// connect takes in 2 parameters:
// 1. any state you want to map,
// 2. an object with any actions you want to use
export default Register;
