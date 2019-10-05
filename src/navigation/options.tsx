import React from 'react';
import { Button } from 'react-native';

export default (title: string = 'Default') => {
  return {
    title,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="blue"
      />
    ),
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