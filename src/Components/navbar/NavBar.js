import React from 'react';
import { View, Text, Link, StyleSheet } from '@react-pdf/renderer';

const NavBar = ({ name, stack, address, phone, email }) => {
  return (
    <View style={styles.navBarStyles}>
      <Text style={styles.name} className='text-uppercase'>
        {name}
      </Text>
      <Text style={styles.stack}>-- {stack} --</Text>
      <View style={styles.row}>
        <View className='col-md-4' style={styles.column}>
          {/* <i className='fas fa-map-marker-alt'></i> */}
          <Text>{address}</Text>
        </View>
        <View className='col-md-4' style={styles.column}>
          {/* <i className='fas fa-phone-alt'></i> */}
          <Text>{phone}</Text>
        </View>
        <View className='col-md-4' style={styles.column}>
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

const styles = StyleSheet.create({
  navBarStyles: {
    backgroundColor: '#003366',
    color: 'white',
    textAlign: 'center',
    padding: '8px 5rem',
  },
  name: {
    textTransform: 'uppercase',
    fontSize: 28,
    paddingBottom: '1.5rem',
  },
  stack: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#b29700',
    paddingBottom: '1.5rem',
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
  },
  column: {
    width: '33.3%',
    fontSize: 14,
  },
});

export default NavBar;
