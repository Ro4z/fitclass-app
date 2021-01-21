import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {WIDTH} from '@constants/dimensions';

const data = [
  'FITCLASS PT',
  '체중 감량',
  'HOME FITNESS',
  '자세 교정',
  'FITNESS 챌린지',
  '헬스 TIP',
  '인증샷',
  'PT 트레이너 리뷰',
  '웨이트 트레이닝',
  '갤러리',
  '요가',
  '루틴 공유',
];

function Category() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headertext}>카테고리</Text>
      </View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={{width: '50%', flexDirection: 'row'}}>
            <View style={styles.point}></View>
            <Text style={styles.category}>{item}</Text>
          </View>
        )}
        numColumns={2}
        style={styles.flatstyle}
      />
    </View>
  );
}

export default Category;

const styles = StyleSheet.create({
  header: {
    width: WIDTH,
    height: 70,
    backgroundColor: '#323232',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  headertext: {
    fontSize: 25,
    color: '#fff',
    fontFamily: 'OpenSauceSans-Bold',
    marginLeft: 30,
  },
  category: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'OpenSauceSans-Bold',
    marginBottom: 20,
  },
  point: {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 7,
    marginRight: 10,
  },
  flatstyle: {
    width: '90%',
    alignSelf: 'center',
    height: 300,
  },
});
