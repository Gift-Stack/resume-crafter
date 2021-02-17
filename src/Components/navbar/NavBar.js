import React from 'react';
import { View, Text, Link, Stylesheet } from '@react-pdf/renderer';

const NavBar = ({ name, stack, address, phone, email }) => {
  return (
    <View style={navBarStyles}>
      <Text className='text-uppercase'> {name} </Text>
      <Text style={{ fontWeight: 'bold', color: '#b29700' }}>
        -- {stack} --
      </Text>
      <View className=' row '>
        <View className='col-md-4'>
          {/* <i className='fas fa-map-marker-alt'></i> */}
          <Text>{address}</Text>
        </View>
        <View className='col-md-4'>
          {/* <i className='fas fa-phone-alt'></i> */}
          <Text>{phone}</Text>
        </View>
        <View className='col-md-4'>
          {/* <i className='fas fa-envelope'></i> */}
          <Text>
            <Link src={`mailto:${email}`} style={{ color: 'white' }}>
              {email}
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};

const navBarStyles = {
  backgroundColor: '#003366',
  color: 'white',
  textAlign: 'center',
  padding: '8px 5rem',
};

export default NavBar;
