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
    <TouchableOpacity onPress={null}>
      <ImageBackground
        style={styles.backgroundimage1}
        source={require('@assets/image/profile_thumbnail_1.jpg')}
        resizeMode="cover">
        <View style={styles.backgroundcover}>
          <Text
            style={[styles.maintitle, {textAlign: 'right', marginRight: 5}]}>
            FITCLASS 캘린더
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default FitclassContentsMenu;

const styles = StyleSheet.create({
  mainContainer: {
    height: 250,
    marginBottom: 30,
  },
  backgroundimage1: {
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
    fontSize: 25,
    fontFamily: 'OpenSauceSans-Bold',
  },
});
