import React from 'react';
import { View, Text, Link, Stylesheet } from '@react-pdf/renderer';

export const Right = ({ experience, skills }) => {
  return (
    <View className='container pl-4'>
      <Text className='h3 text-left  pt-4'>Work Experience</Text>
      <View style={{ height: 20 }} />
      <View>
        {experience.map((exp) => (
          // // console.log('exp', exp)
          <View key={Math.random() * 1000000} className='text-left pb-3'>
            <View className='h5'>
              <Text style={{ color: '#b29700' }}>{exp.title}</Text>
              <Text>
                {' '}
                at {exp.employer} ({exp.experienceStartDate} till{' '}
                {exp.experienceEndDate})
              </Text>
            </View>
            <Text className='p'>{exp.jobDescription}</Text>
          </View>
        ))}

        <Text className=' h3 text-left pt-4'>Skills</Text>
        <View style={{ height: 20 }} />
        <View className='text-left'>
          {skills.map((skill) => (
            <Text className=' h6 card p-3' key={Math.random() * 1000000}>
              {' '}
              {skill}{' '}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};
