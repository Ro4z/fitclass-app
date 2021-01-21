import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {WIDTH} from '@constants/dimensions';

const continousAttention = 199;

const startWeight = 80;
const goalWeight = 65;
const nowWeight = 75;
const colorWeight = (startWeight - nowWeight) / (startWeight - goalWeight);

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
        <View style={styles.graph}>
          <View
            style={{
              flex: colorWeight,
              backgroundColor: '#FF7D7D',
              borderRadius: 5,
            }}></View>
          <View style={{flex: 1 - colorWeight}}></View>
        </View>
        <View style={{flexDirection: 'row', width: '90%'}}>
          <Text style={styles.graphtext}>시작 체중</Text>
          <View style={{flex: 1}} />
          <Text style={styles.graphtext}>목표 체중</Text>
        </View>
        <View style={styles.graph}>
          <View
            style={{
              flex: colorWeight,
              backgroundColor: '#FFBC64',
              borderRadius: 5,
            }}></View>
          <View style={{flex: 1 - colorWeight}}></View>
        </View>
        <View style={{flexDirection: 'row', width: '90%'}}>
          <Text style={styles.graphtext}>시작 중량</Text>
          <View style={{flex: 1}} />
          <Text style={styles.graphtext}>목표 중량</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default ProfileContents;

const styles = StyleSheet.create({
  backgroundimage: {
    width: WIDTH,
    height: 330,
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
    height: 12,
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginTop: 8,
    flexDirection: 'row',
  },
});
