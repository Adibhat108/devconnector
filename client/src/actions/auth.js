import axios from 'axios';
import setAlert from './alert';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  // SET_ALERT,
} from './types';

// Register user
const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert('Registration was successful', 'success'));
  } catch (err) {
    const { errors } = err.response.data;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export default register;
