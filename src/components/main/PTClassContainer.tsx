import React from 'react';
import {StyleSheet, View} from 'react-native';
import ContentTitle from './ContentTitle';
import PTClassList from './PTClassList';

function PTClassContainer() {
  return (
    <View style={styles.mainContainer}>
      <ContentTitle title="PT CLASS" subTitle="화상 통화로 만나는 실시간 PT" />
      <PTClassList />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    height: 400,
  },
});

export default PTClassContainer;
