import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import ContentTitle from '@components/main/ContentTitle';
import PopularStudyList from './PopularStudyList';

function PopularStudyContainer({navigation}: {navigation?: any}) {
  return (
    <View style={styles.mainContainer}>
      <ContentTitle
        title="TOP 3 ZOOM 독서실"
        subTitle="TOP 참여율 FITCLASS ZOOM"
      />
      <PopularStudyList navigation={navigation} />
    </View>
  );
}

export default PopularStudyContainer;

const styles = StyleSheet.create({
  mainContainer: {
    height: 440,
    marginBottom: 30,
  },
});
