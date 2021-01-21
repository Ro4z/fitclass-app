import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import PopularStudyListItem from './PopularStudyListItem';

const data = [
  {title: '작심365일', numOfMembers: 70},
  {title: '헬창 보유 방', numOfMembers: 63},
  {title: '덤최몇?', numOfMembers: 59},
];

function PopularStudyList({navigation}: {navigation?: any}) {
  return (
    <View style={styles.main}>
      <FlatList
        data={[...data, ...data, ...data]}
        keyExtractor={(_, index) => `PopularStudyListItem_${index}`}
        renderItem={({item, index}) => (
          <PopularStudyListItem
            data={item}
            index={index}
            navigation={navigation}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

export default PopularStudyList;

const styles = StyleSheet.create({
  main: {
    marginTop: 15,
    height: 380,
  },
  separator: {
    height: 10,
  },
});
