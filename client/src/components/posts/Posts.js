/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPosts } from '../../actions/post';
import PostItem from './PostItem';

const posts = () => {
  const { posts = [], loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    loading ? <Spinner /> : (
      <>
        <h1 className="text-primary">Posts</h1>
        <p className="lead">
          <i className="fas fa-user" />
          {' '}
          Welcome to the community
        </p>
        {/* PostForm */}
        <div className="posts">
          {posts.length > 0 && posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </>
    )
  );
};

export default posts;
