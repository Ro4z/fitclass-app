import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ShowTopClassRow from '@components/myclass/TopClassItem';

const topclassdata = [
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

function TopClass() {
  return (
    <View style={{marginLeft: 5, height: 350}}>
      <Text style={styles.maintitle}>실시간 인기 클래스</Text>
      <Text style={styles.subtitle}>TOP 인기 클래스</Text>
      <FlatList
        data={topclassdata}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ShowTopClassRow data={item} index={index} />
        )}
        keyExtractor={(_, index) => `PTClassListItem${index}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

export default TopClass;

const styles = StyleSheet.create({
  maintitle: {
    fontSize: 30,
    fontFamily: 'OpenSauceSans-Bold',
    color: '#fff',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'OpenSauceSans-Regular',
    color: '#fff',
    marginBottom: 10,
  },
  separator: {
    width: 10,
  },
});
