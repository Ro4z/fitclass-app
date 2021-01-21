import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const WikiScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'rgb(37,37,37)'}}>
      <Image
        style={{width: '100%', height: '100%', marginTop: 20}}
        source={require('@assets/image/wiki_fake.png')}
      />
    </SafeAreaView>
  );
};

export default WikiScreen;

const styles = StyleSheet.create({});
