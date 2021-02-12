import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUsersProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const Dashboard = () => {
  const dispatch = useDispatch();

  const { profile, loading } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUsersProfile());
  }, []);

  return loading && profile === null ? <Spinner /> : (
    <>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" />
        Welcome
        {' '}
        {user && user.name}
      </p>
      {
        profile !== null ? <>has</>
          : (
            <>
              <p>You have not setup a profile. Please add some info.</p>
              <Link to="/create-profile" className="btn btn-primary my-1">
                Create Profile
              </Link>
            </>
          )
      }
    </>
  );
};

export default Dashboard;
