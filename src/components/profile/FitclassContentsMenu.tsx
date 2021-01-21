import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {WIDTH} from '@constants/dimensions';

function FitclassContentsMenu() {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={null}>
          <ImageBackground
            style={styles.backgroundimage1}
            source={require('@assets/image/profile_thumbnail_1.jpg')}
            resizeMode="cover">
            <View style={styles.backgroundcover}>
              <Text
                style={[
                  styles.maintitle,
                  {textAlign: 'right', marginRight: 5},
                ]}>
                FITCLASS 캘린더
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={null}>
          <ImageBackground
            style={styles.backgroundimage1}
            source={require('@assets/image/posture_service_thumbnail.png')}
            resizeMode="cover">
            <View style={styles.backgroundcover}>
              <Text
                style={[styles.subtitle, {textAlign: 'right', marginRight: 5}]}>
                FITCLASS AI
              </Text>
              <Text
                style={[
                  styles.maintitle,
                  {textAlign: 'right', marginRight: 5},
                ]}>
                FITCLASS 자세교정
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={null}>
        <ImageBackground
          style={styles.backgroundimage2}
          source={require('@assets/image/pt_service_thumbnail.jpg')}
          resizeMode="cover">
          <View style={styles.backgroundcover}>
            <Text
              style={[styles.maintitle, {textAlign: 'right', marginRight: 5}]}>
              FITCLASS PT 지도
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

export default FitclassContentsMenu;

const styles = StyleSheet.create({
  mainContainer: {
    height: 250,
    marginBottom: 30,
  },
  backgroundimage1: {
    width: WIDTH / 2,
    height: 100,
    marginTop: 10,
  },
  backgroundimage2: {
    height: 100,
  },
  backgroundcover: {
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
  maintitle: {
    color: '#ffffff',
    fontSize: 22,
    fontFamily: 'OpenSauceSans-Bold',
  },
  subtitle: {
    color: '#ffffff',
    fontFamily: 'OpenSauceSans-Bold',
    fontSize: 12,
    marginTop: 2,
  },
});
