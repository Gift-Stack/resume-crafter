import React from 'react';
import { View, Text, Link, Stylesheet } from '@react-pdf/renderer';

export const Left = ({ education, languages, links }) => {
  console.log('education', education);
  return (
    <View className='container'>
      <Text className='h4 pt-4'>EDUCATION</Text>
      <View style={{ borderBottomWidth: 2 }} />
      <View>
        {education.map((cur) => (
          <View className='pb-2'>
            <Text className='h6' style={{ textTransform: 'uppercase' }}>
              {cur.degree}
            </Text>
            <Text
              className='p'
              style={{
                color: '#b29700',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              <View>{cur.course}</View>
              <View>
                ({cur.startDate} till {cur.endDate})
              </View>
            </Text>
          </View>
        ))}
      </View>
      <View style={{ height: 20 }} />
      <Text className='h4'>LANGUAGES</Text>
      <View style={{ borderBottomWidth: 2 }} />
      {languages.map((language) => (
        <Text style={{ color: '#b29700', fontSize: 20, fontWeight: 'bold' }}>
          - {language} -
        </Text>
      ))}
      <View style={{ height: 20 }} />
      <Text className='h4'>LINKS</Text>
      <View style={{ borderBottomWidth: 2 }} />
      {links.map((link) => (
        <Text className='list-unstyled list'>
          <Link
            style={{ color: '#b29700' }}
            src={`${link}`}
            target='_blank'
            className='link '
          >
            {link}
          </Link>
        </Text>
      ))}
    </View>
  );
};
