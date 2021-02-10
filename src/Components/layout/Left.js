import React from 'react';
import { Link } from 'react-router-dom';

export const Left = ({ education, languages, links }) => {
  return (
    <div className='container'>
      <h4 className=' pt-4'>EDUCATION</h4>
      <hr />
      {education.map((cur) => (
        <div className='pb-2'>
          <h6 style={{ textTransform: 'uppercase' }}>{cur.degree}</h6>
          <p
            style={{
              color: '#b29700',
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}
          >
            <div>{cur.course}</div>
            <div>
              ({cur.startDate} till {cur.endDate})
            </div>
          </p>
        </div>
      ))}
      <br />
      <br />
      <h4 className=''>LANGUAGES</h4>
      <hr />
      {languages.map((language) => (
        <ul className='list-unstyled'>
          <li style={{ color: '#b29700', fontSize: 20, fontWeight: 'bold' }}>
            - {language} -
          </li>
        </ul>
      ))}
      <br />
      <h4>LINKS</h4>
      <hr />
      {links.map((link) => (
        <li className='list-unstyled'>
          <a href={`http://${link}`} target='_blank' className='link '>
            {link}
          </a>
        </li>
      ))}
    </div>
  );
};
