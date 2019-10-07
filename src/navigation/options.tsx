import React from 'react';
import { HeaderRight, HeaderLeft } from '../components/header';

export default (title: string = 'Default') => {
  return {
    title,
    // headerLeft: ( <HeaderLeft />),
    headerRight: <HeaderRight />,
    headerStyle: {
      height: 150,
      backgroundColor: 'teal',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
}