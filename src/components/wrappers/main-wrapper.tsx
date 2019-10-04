
import React from 'react';
import { Text, StatusBar, SafeAreaView } from 'react-native';


const MainWrapper = ({ children }) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        {children}
      </SafeAreaView>
    </>
  );
};

export default MainWrapper;
