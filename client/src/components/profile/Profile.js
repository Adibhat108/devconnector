/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import Experience from '../dashboard/Experience';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';

const Profile = ({ match }) => {
  const dispatch = useDispatch();
  const { profile: { profile, loading }, auth } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getProfileById(match.params.id));
  }, []);
  return (
    <>
      {profile === null || loading ? <Spinner /> : (
        <>
          <Link to="/profiles" className="btn btn-light">
            Back to profiles
          </Link>
          {
            auth.isAuthenticated && !auth.loading
            && auth.user._id === profile.user._id
            && <Link to="/edit-profile" className="btn btn-dark">Edit Profile</Link>
          }
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {profile.experience.length > 0 ? (
                <>
                  {profile.experience.map((exp) => (
                    <ProfileExperience key={exp._id} experience={exp} />
                  ))}
                </>
              ) : (<h4>No Experience Credentials</h4>)}
            </div>
            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                <>
                  {profile.education.map((exp) => (
                    <ProfileEducation key={exp._id} education={exp} />
                  ))}
                </>
              ) : (<h4>No education Credentials</h4>)}
            </div>
          </div>
          {profile.githubusername && (
            <ProfileGithub userName={profile.githubusername} />
          )}
        </>
      )}
    </>
  );
};

export default Profile;
