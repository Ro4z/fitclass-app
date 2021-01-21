import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ShowMyClassRow from '@components/myclass/MyClassItem';

const myclassdata = [
  {
    trainerName: 'OOO',
    title: 'OOO와 함께 하는 웨이트 입문',
    heart: 356,
    smile: 2134,
  },
  {
    trainerName: 'OOO',
    title: '안녕 친구들~',
    heart: 356,
    smile: 2134,
  },
  {
    trainerName: 'OOO',
    title: '오늘부터 시작!',
    heart: 113,
    smile: 324,
  },
];
function MyClass() {
  return (
    <View style={{marginLeft: 5, marginBottom: 5}}>
      <Text style={styles.maintitle}>나의 PT CLASS</Text>
      <Text style={styles.subtitle}>참여 중인 클래스</Text>
      <FlatList
        data={myclassdata}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ShowMyClassRow data={item} index={index} />
        )}
        keyExtractor={(_, index) => `PTClassListItem${index}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
export default MyClass;

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
