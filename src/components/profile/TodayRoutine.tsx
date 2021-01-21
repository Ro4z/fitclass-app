import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import RoutineElement from '@components/profile/RoutineElement';

const data = [
  {
    elementstatus: 0,
    title: '플랫 벤치프레스 n회',
  },
  {
    elementstatus: 0,
    title: '바벨 로우 n회',
  },
  {
    elementstatus: 0,
    title: '덤벨 벤치프레스 n회',
  },
  {
    elementstatus: 1,
    title: '원암 덤벨 로우 n회',
  },
  {
    elementstatus: 2,
    title: '인클라인 벤치 프레스 n회',
  },
  {
    elementstatus: 2,
    title: '렛 폴 다운 n회',
  },
  {
    elementstatus: 2,
    title: '렛 폴 다운 n회',
  },
  {
    elementstatus: 2,
    title: '렛 폴 다운 n회',
  },
  {
    elementstatus: 2,
    title: '렛 폴 다운 n회',
  },
];

function TodayRoutine() {
  return (
    <View>
      <View style={styles.mainContainer}>
        <Text style={styles.todayroutine}>오늘의 루틴</Text>
        <TouchableOpacity style={styles.modifybutton} onPress={null}>
          <Text style={styles.modifytext}>수정하기</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{marginLeft: 23}}>
              <RoutineElement data={item} />
            </View>
          )}
          keyExtractor={(_, index) => `RoutineElement${index}`}
        />
        <View style={styles.squaremeaning}>
          <RoutineElement data={{elementstatus: 0, title: '완료'}} />
          <RoutineElement data={{elementstatus: 1, title: '진행중'}} />
          <RoutineElement data={{elementstatus: 2, title: '미진행'}} />
        </View>
      </View>
    </View>
  );
}

export default TodayRoutine;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 13,
  },
  todayroutine: {
    fontSize: 30,
    fontFamily: 'OpenSauceSans-Bold',
    color: '#fff',
    marginLeft: 30,
  },
  modifytext: {
    fontSize: 10,
    color: '#E57171',
    marginHorizontal: 8,
    textAlign: 'center',
    fontFamily: 'OpenSauceSans-Bold',
  },
  modifybutton: {
    borderColor: '#E57171',
    borderRadius: 20,
    marginRight: 40,
    borderWidth: 1.5,
    justifyContent: 'center',
    height: 20,
    marginTop: 10,
  },
  squaremeaning: {
    flexDirection: 'row',
    marginTop: 10,
    height: 100,
    marginLeft: 23,
  },
});
