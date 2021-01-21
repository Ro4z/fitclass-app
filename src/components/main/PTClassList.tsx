import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import PTClassListItem from './PTClassListItem';

const data = [
  {
    trainerName: 'OOO',
    title: 'OOO와 함께 하는 웨이트 입문',
    heart: 356,
    smile: 2134,
  },
  {
    trainerName: 'OOO',
    title: '상체는 못 참지 아 ㅋㅋ',
    heart: 219,
    smile: 1548,
  },
  {
    trainerName: 'OOO',
    title: '각잡고 배우는 스파르타식 웨이트',
    heart: 172,
    smile: 748,
  },
];

function PTClassList() {
  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <PTClassListItem data={item} index={index} />
        )}
        keyExtractor={(_, index) => `PTClassListItem${index}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

export default PTClassList;
const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    height: 200,
    width: '100%',
  },
  separator: {
    width: 10,
  },
});
