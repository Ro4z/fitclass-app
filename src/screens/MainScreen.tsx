import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import WorkoutStudyContainer from '@components/main/WorkoutStudyContainer';
import BannerImage from '@components/main/BannerImage';
import PTClassContainer from '@components/main/PTClassContainer';
import Header from '@components/structure/Header';
import {BACKGROUND} from '@styles/color';
import {RouteProp} from '@react-navigation/native';

function MainScreen({navigation}: {navigation?: any}) {
  return (
    <SafeAreaView style={{backgroundColor: 'rgb(50,50,50)'}}>
      <Header title="FITCLASS" navigation={navigation} />
      <ScrollView style={styles.mainContainer}>
        <WorkoutStudyContainer navigation={navigation} />
        <BannerImage />
        <PTClassContainer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
