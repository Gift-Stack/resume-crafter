import React from 'react';

export const Experience = ({ experience }) => {
  return (
    <div className='card px-2 py-2 mb-2'>
      <h6>{experience.title}</h6>
      <p className='text-muted'>
        {experience.experienceStartDate} - {experience.experienceEndDate}
      </p>
    </div>
  );
};
