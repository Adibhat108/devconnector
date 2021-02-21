/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const ProfileGithub = ({ userName }) => {
  const { repos } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGithubRepos(userName));
  }, []);
  return (
    <>
      <div className="profile-github">
        <h2 className="text-primary my-1">Github Repos</h2>
        {repos === null ? <Spinner /> : repos.map((repo) => (
          <div key={repo._id} className="repo bg-white p-1 my-1">
            <div>
              <h4>
                <a href={repo.html_url} target="_blank" rel="noopenner noreferrer">{repo.name}</a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">
                  Stars:
                  {repo.stargazers_count}
                </li>
                <li className="badge badge-dark">
                  Watchers:
                  {repo.watchers_count }
                </li>
                <li className="badge badge-white">
                  Forks:
                  {repo.forks_count }
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>

  );
};

ProfileGithub.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default ProfileGithub;
