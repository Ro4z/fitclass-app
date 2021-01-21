import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {WIDTH} from '@constants/dimensions';
import CaretupIcon from 'react-native-vector-icons/AntDesign';
import GoalGuage from '@components/profile/GoalGuage';

CaretupIcon.loadFont();

const continousAttention = 199;

const goalPercents = [60, 30, 70];
const goalContents = [
  '[월간]3대 중량 250kg 달성',
  '[주간]주간 루틴 80% 진행',
  '[월간]월간 루틴 50% 진행',
];
const ranking = 37;
const missionPercents = 63;

function ProfileContents() {
  return (
    <ImageBackground
      style={styles.backgroundimage}
      source={require('@assets/image/profile_background.jpg')}
      resizeMode="cover">
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.7)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={styles.profileimage}
          resizeMode="stretch"
          source={require('@assets/image/profile_sample.jpg')}
        />
        <Text style={styles.username}>Dolly</Text>
        <Text style={styles.datetext}>시작일 2021-01-15</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.howlong}>{continousAttention}</Text>
          <Text style={styles.attendday}>일째 연속 출석</Text>
        </View>
        <Text style={styles.datetext}>May 14 - Jun 13</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.graph}>
            <Text style={styles.rankingmission}>현재 랭킹 </Text>
            <Text
              style={[
                styles.rankingmissionvalue,
                {
                  color: '#FFFFAC',
                },
              ]}>
              {ranking}
            </Text>
            <Text style={styles.rankingmission}>위</Text>
          </View>
          <View style={styles.graph}>
            <Text style={styles.rankingmission}>미션 달성 </Text>
            <Text
              style={[
                styles.rankingmissionvalue,
                {
                  color: '#C9B7DA',
                },
              ]}>
              {missionPercents}
            </Text>
            <Text style={styles.rankingmission}>%</Text>
          </View>
        </View>

        <GoalGuage
          goalPercents={goalPercents[0]}
          goalContents={goalContents[0]}
          index={0}
        />
        <GoalGuage
          goalPercents={goalPercents[1]}
          goalContents={goalContents[1]}
          index={1}
        />
        <GoalGuage
          goalPercents={goalPercents[2]}
          goalContents={goalContents[2]}
          index={2}
        />
      </View>
    </ImageBackground>
  );
}

export default ProfileContents;

const styles = StyleSheet.create({
  backgroundimage: {
    width: WIDTH,
    height: 480,
  },
  profileimage: {
    width: 130,
    height: 130,
    marginLeft: -15,
    paddingHorizontal: 15,
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 5,
  },
  username: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'OpenSauceSans-Bold',
  },
  datetext: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'OpenSauceSans-Medium',
    marginBottom: 2,
  },
  attendday: {
    color: '#DEF9E9',
    fontFamily: 'OpenSauceSans-Bold',
    fontSize: 22,
  },
  graphtext: {
    color: '#ffffff',
    fontFamily: 'OpenSauceSans-Bold',
    fontSize: 11,
    marginTop: 2,
  },
  howlong: {
    color: '#6EEE1A',
    fontFamily: 'OpenSauceSans-Bold',
    fontSize: 22,
  },
  graph: {
    height: 45,
    width: 150,
    backgroundColor: '#D44683',
    borderRadius: 30,
    marginTop: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  rankingmission: {
    color: '#fff',
    fontFamily: 'OpenSauceSans-Bold',
    fontSize: 19,
    textAlign: 'center',
    marginTop: 10,
  },
  rankingmissionvalue: {
    fontFamily: 'OpenSauceSans-Bold',
    fontSize: 21,
    textAlign: 'center',
    marginTop: 8,
  },
});
