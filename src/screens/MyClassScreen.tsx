import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import Header from '@components/structure/Header';
import {BACKGROUND} from '@styles/color';
import MyClass from '@components/myclass/MyClass';
import Recommand from '@components/myclass/Recommand';
import TopClass from '@components/myclass/TopCalss';

function MyClassScreen({navigation}: {navigation?: any}) {
  return (
    <SafeAreaView style={{backgroundColor: 'rgb(50,50,50)'}}>
      <Header title="FITCLASS" navigation={navigation} />
      <ScrollView style={styles.mainContainer}>
        <MyClass />
        <Recommand />
        <TopClass />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MyClassScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
