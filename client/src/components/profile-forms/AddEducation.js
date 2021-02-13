import React, { useState } from 'react';
import {
  // Link,
  useHistory,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddExperience = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, setToDateDisabled] = useState(false);

  const {
    school, degree, fieldofstudy, from, to, current, description,
  } = formData;

  const onchange = (e) => setFormData({
    ...formData, [e.target.name]: e.target.value,
  });

  return (
    <>
      <h1 className="large text-primary">
        Add Your Education
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch" />
        {' '}
        Add any school/bootcamp that you have attended
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addEducation(formData, history));
        }}
      >
        <div className="form-group">
          <input type="text" placeholder="* School or Bootcamp" name="school" value={school} onChange={onchange} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Degree or Certificate" name="degree" value={degree} onChange={onchange} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Field Of Study" name="fieldofstudy" value={fieldofstudy} onChange={onchange} />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={onchange} />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              value={current}
              checked={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
                setToDateDisabled(!toDateDisabled);
              }}
            />
            {' '}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" value={to} onChange={onchange} disabled={toDateDisabled} />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}
            onChange={onchange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </>
  );
};

export default AddExperience;
