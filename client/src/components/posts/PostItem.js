/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike } from '../../actions/post';

const PostItem = ({
  post: {
    _id, text, name, avatar, user, likes, comments, date,
  },
}) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  useEffect(() => {
    console.log({
      _id, text, name, avatar, user, likes, comments, date,
    });
  }, [_id, text, name, avatar, user, likes, comments, date]);

  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
          <img
            className="round-img"
            src={avatar}
            alt=""
          />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on
          {' '}
          <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        <button type="button" className="btn btn-light" onClick={(e) => dispatch(addLike(_id))}>
          <i className="fas fa-thumbs-up" />
          {likes.length > 0 && (
          <span>
            {' '}
            {likes.length}
          </span>
          )}
        </button>
        <button type="button" className="btn btn-light" onClick={(e) => dispatch(removeLike(_id))}>
          <i className="fas fa-thumbs-down" />
        </button>
        <Link to={`/post/${_id}`} className="btn btn-primary">
          Discussion
          {' '}
          {comments.length > 0 && <span className="comment-count">{comments.length}</span>}
        </Link>
        {!auth.loading && user === auth.user._id && (
        <button
          type="button"
          className="btn btn-danger"
        >
          <i className="fas fa-times" />
        </button>
        )}

      </div>
    </div>
  );
};

export default PostItem;
