import React from 'react';

export const Experience = ({ experience, handleDeleteExperience }) => {
  // const handleDelete = (id) => {
  //   handleDeleteExperience(id);
  // };
  return (
    <div className='card px-2 py-2 mb-2 d-flex flex-row justify-content-between'>
      <div>
        <h6>{experience.title}</h6>
        <p className='text-muted'>
          {experience.experienceStartDate} - {experience.experienceEndDate}
        </p>
      </div>
      <span onClick={() => handleDeleteExperience(experience.id)}>
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 16 16'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z'></path>
          <path
            fillRule='evenodd'
            d='M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
            clipRule='evenodd'
          ></path>
        </svg>
      </span>
    </div>
  );
};
