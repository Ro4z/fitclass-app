import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {BACKGROUND} from '@styles/color';
import Header from '@components/structure/Header';
import WorkoutStudyContainer from '@components/main/WorkoutStudyContainer';
import PopularStudyContainer from '@components/study/PopularStudyContainer';

function WorkoutStudyScreen({navigation}: {navigation?: any}) {
  return (
    <SafeAreaView style={{backgroundColor: 'rgb(50,50,50)'}}>
      <Header title="FITCLASS" navigation={navigation} />
      <ScrollView style={styles.mainContainer}>
        <PopularStudyContainer navigation={navigation} />
        <WorkoutStudyContainer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default WorkoutStudyScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  studyList: {
    height: 250,
    marginBottom: 30,
  },
});
