import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAccount, getCurrentUsersProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
///
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
        profile !== null ? (
          <>
            <DashboardActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <div className="my-2">
              <button className="btn btn-danger" onClick={() => dispatch(deleteAccount())} type="button">
                <i className="fas fa-user-minus" />
                Delete My Account
              </button>
            </div>
          </>
        )
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
