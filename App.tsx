import React from 'react';
import {LogBox, StyleSheet} from 'react-native';
import DrawerNavigationContainer from '@navigation/drawernav';

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <>
      <DrawerNavigationContainer />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
