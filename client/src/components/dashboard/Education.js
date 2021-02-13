import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Education = ({ education }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td>
        <Moment format="YYYY/MM/DD">{edu.from}</Moment>
        {' '}
        -
        {' '}
        {' '}
        {
          edu.to === null ? ('Now') : <Moment format="YYYY/MM/DD">{edu.to}</Moment>
        }
      </td>
      <td>
        <button className="btn btn-danger" type="button">Delete</button>
      </td>
    </tr>
  ));
  return (
    <>
      <h2 className="my-2">
        Education Credentials
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th className="hide-sm">{' '}</th>
          </tr>
        </thead>
        <tbody>
          {educations}
        </tbody>
      </table>
    </>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

export default Education;
