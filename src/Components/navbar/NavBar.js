import React from 'react';

const NavBar = ({ name, stack, address, phone, email }) => {
  return (
    <div style={navBarStyles}>
      <h2 className='text-uppercase'> {name} </h2>
      <p style={{ fontWeight: 'bold', color: '#b29700' }}>-- {stack} --</p>
      <div className=' row '>
        <div className='col-md-4'>
          <i className='fas fa-map-marker-alt'></i>
          <p>{address}</p>
        </div>
        <div className='col-md-4'>
          <i className='fas fa-phone-alt'></i>
          <p>{phone}</p>
        </div>
        <div className='col-md-4'>
          <i className='fas fa-envelope'></i>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

const navBarStyles = {
  backgroundColor: '#003366',
  color: 'white',
  textAlign: 'center',
  padding: '8px 5rem',
};

export default NavBar;
