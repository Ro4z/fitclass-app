import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Header from '@components/structure/Header';
import {BACKGROUND} from '@styles/color';
import ProfileContents from '@components/profile/ProfileContents';
import FitclassContentsMenu from '@components/profile/FitclassContentsMenu';
import TodayRoutine from '@components/profile/TodayRoutine';

function ProfileScreen({navigation}: {navigation?: any}) {
  return (
    <SafeAreaView style={{backgroundColor: 'rgb(50,50,50)'}}>
      <Header title="FITCLASS" navigation={navigation} />
      <ScrollView style={styles.mainContainer}>
        <ProfileContents />
        <FitclassContentsMenu />
        <TodayRoutine />
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND,
  },
});
