import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ShowRecommandRow from '@components/myclass/RecommandItem';

const recommanddata = [
  {
    trainerName: 'OOO',
    title: '안녕 친구들~',
    heart: 356,
    smile: 2134,
  },
  {
    trainerName: 'OOO',
    title: '뉴페이스 인사 오지게 박습니다',
    heart: 219,
    smile: 1548,
  },
  {
    trainerName: 'OOO',
    title: '덤최몇?',
    heart: 172,
    smile: 748,
  },
];

function Recommand() {
  return (
    <View style={{marginLeft: 5, marginBottom: 5}}>
      <Text style={styles.maintitle}>FITCLASS AI 추천 클래스</Text>
      <Text style={styles.subtitle}>이 클래스 어떤가요?</Text>
      <FlatList
        data={recommanddata}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ShowRecommandRow data={item} index={index} />
        )}
        keyExtractor={(_, index) => `PTClassListItem${index}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

export default Recommand;

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
