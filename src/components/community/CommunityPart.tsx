import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {WIDTH} from '@constants/dimensions';
import CommunityElement from '@components/community/CommunityElement';

const data = [
  {
    category: '인증샷',
    title: '헬린이 스쿼트 126kg 달성',
    username: 'guest16',
    contents: '아무튼 헬린이임ㅋㅋㅋ',
    heart: 24,
    comment: 21,
    picture: 3,
  },
  {
    category: '요가',
    title: '홈피트 요가 같이하실분',
    username: 'guest13',
    contents: '쪽지주세용',
    heart: 16,
    comment: 14,
    picture: 1,
  },
  {
    category: 'HOME FITNESS',
    title: '어제 홈피트 레전드.gif',
    username: 'guest8',
    contents: '이게 헬스지',
    heart: 15,
    comment: 17,
    picture: 1,
  },
];

function CommunityPart() {
  return (
    <View>
      <Text style={styles.main}>FITCLASS 커뮤니티</Text>
      <Text style={styles.sub}>실시간 HOT 게시글</Text>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View
            style={{
              marginTop: 5,
              marginBottom: 5,
            }}>
            <CommunityElement data={item} index={index} />
          </View>
        )}
        keyExtractor={(_, index) => `RoutineElement${index}`}
      />
    </View>
  );
}

export default CommunityPart;

const styles = StyleSheet.create({
  mainContainer: {
    height: 250,
    marginBottom: 30,
  },
  main: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'OpenSauceSans-Bold',
    marginTop: 20,
    marginLeft: 10,
  },
  sub: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'OpenSauceSans-Medium',
    marginLeft: 10,
    marginBottom: 5,
  },
});
