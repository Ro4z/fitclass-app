import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';

import {WIDTH} from '@constants/dimensions';

function BannerImage() {
  return (
    <ImageBackground
      style={styles.image}
      source={require('@assets/image/main_banner.jpg')}
      blurRadius={5}
      resizeMode="cover">
      <Text style={styles.subText}>인공지능과 함께하는</Text>
      <Text style={styles.mainText}>FITCLASS 챌린지</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: WIDTH,
    height: 160,
    marginLeft: -15,
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  mainText: {
    color: 'white',
    fontFamily: 'NanumSquareEB',
    fontSize: 35,
  },
  subText: {
    color: 'white',
    fontFamily: 'NanumSquareR',
    fontSize: 15,
    marginBottom: 3,
  },
});
export default BannerImage;
