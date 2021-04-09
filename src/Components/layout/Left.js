import React from 'react';
import { View, Text, Link, Stylesheet } from '@react-pdf/renderer';

export const Left = ({ education, languages, links }) => {
  return (
    <View className='container'>
      <Text className='h4 pt-4'>EDUCATION</Text>
      <View style={{ borderBottomWidth: 2 }} />
      <View>
        {education.map((cur) => (
          <View key={cur.id} className='pb-2'>
            <Text className='h6' style={{ textTransform: 'uppercase' }}>
              {cur.degree}
            </Text>
            <View
              className='p'
              style={{
                color: '#b29700',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              <Text>{cur.course}</Text>
              <Text>
                ({cur.startDate} till {cur.endDate})
              </Text>
            </View>
          </View>
        ))}
      </View>
      <View style={{ height: 20 }} />
      <Text className='h4'>LANGUAGES</Text>
      <View style={{ borderBottomWidth: 2 }} />
      {languages.map((language) => (
        <Text
          key={language.id}
          style={{ color: '#b29700', fontSize: 20, fontWeight: 'bold' }}
        >
          - {language.language} -
        </Text>
      ))}
      <View style={{ height: 20 }} />
      <Text className='h4'>LINKS</Text>
      <View style={{ borderBottomWidth: 2 }} />
      {links.map((link) => (
        <View className='list-unstyled list'>
          <Link
            style={{ color: '#b29700' }}
            src={`${link.link}`}
            target='_blank'
            className='link '
          >
            {link.link}
          </Link>
        </View>
      ))}
    </View>
  );
};
