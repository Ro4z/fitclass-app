import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ContentTitle from './ContentTitle';
import PopularStudyList from './WorkoutStudyList';

function WorkoutStudyContainer({navigation}: {navigation?: any}) {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={navigation && (() => navigation.navigate('WorkoutStudy'))}>
        <ContentTitle title="Home Fitness" subTitle="우리 같이 운동합시다" />
      </TouchableOpacity>
      <PopularStudyList />
    </View>
  );
}

export default WorkoutStudyContainer;

const styles = StyleSheet.create({
  mainContainer: {
    height: 250,
    marginBottom: 30,
  },
});
