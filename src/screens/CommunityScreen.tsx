import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Header from '@components/structure/Header';
import {BACKGROUND} from '@styles/color';
import CommunityPart from '@components/community/CommunityPart';
import Category from '@components/community/Category';

function CommunityScreen({navigation}: {navigation?: any}) {
  return (
    <SafeAreaView style={{backgroundColor: 'rgb(50,50,50)'}}>
      <Header title="FITCLASS" navigation={navigation} />
      <ScrollView style={styles.mainContainer}>
        <CommunityPart />
        <Category />
      </ScrollView>
    </SafeAreaView>
  );
}

export default CommunityScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND,
  },
});
