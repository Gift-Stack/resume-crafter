import React from 'react';

export const Right = ({ experience, skills }) => {
  console.log('experience', experience);
  return (
    <div className='container pl-4'>
      <h3 className='text-left  pt-4'>Work Experience</h3>
      <br />
      <div>
        {experience.map((exp) => (
          <div key={Math.random() * 1000000} className='text-left pb-3'>
            <h5>
              <span style={{ color: '#b29700' }}>{exp.title}</span> at{' '}
              {exp.employer} ({exp.experienceStartDate} till{' '}
              {exp.experienceEndDate})
            </h5>
            <p>{exp.jobDescription}</p>
          </div>
        ))}

        <h3 className='text-left pt-4'>Skills</h3>
        <br />
        <div className='text-left'>
          {skills.map((skill) => (
            <h6 className='card p-3' key={Math.random() * 1000000}>
              {' '}
              {skill}{' '}
            </h6>
          ))}
        </div>
      </div>
    </div>
  );
};
