import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {WIDTH} from '@constants/dimensions';

function FitclassContentsMenu() {
  return (
    <View style={{flexDirection: 'row'}}>
      <ImageBackground
        style={styles.backgroundimage2}
        source={require('@assets/image/pt_service_thumbnail.jpg')}
        resizeMode="cover">
        <View style={styles.backgroundcover}>
          <Text style={[styles.subtitle, {textAlign: 'right', marginRight: 5}]}>
            FITCLASS TUTOR
          </Text>
          <Text
            style={[styles.maintitle, {textAlign: 'right', marginRight: 5}]}>
            FITCLASS PT 서비스
          </Text>
        </View>
      </ImageBackground>
      <ImageBackground
        style={styles.backgroundimage2}
        source={require('@assets/image/posture_service_thumbnail.png')}
        resizeMode="cover">
        <View style={styles.backgroundcover}>
          <Text style={[styles.subtitle, {textAlign: 'right', marginRight: 5}]}>
            FITCLASS AI
          </Text>
          <Text
            style={[styles.maintitle, {textAlign: 'right', marginRight: 5}]}>
            FITCLASS 자세교정
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default FitclassContentsMenu;

const styles = StyleSheet.create({
  mainContainer: {
    height: 250,
    marginBottom: 30,
  },
  backgroundimage2: {
    width: WIDTH / 2,
    height: 150,
    marginTop: 10,
  },
  backgroundcover: {
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
  maintitle: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'OpenSauceSans-Bold',
  },
  subtitle: {
    color: '#ffffff',
    fontFamily: 'OpenSauceSans-Bold',
    fontSize: 11,
    marginTop: 2,
  },
});
