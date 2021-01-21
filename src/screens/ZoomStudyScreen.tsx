import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ArmIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlayIcon from 'react-native-vector-icons/Feather';
import SendIcon from 'react-native-vector-icons/Feather';
import SmileIcon from 'react-native-vector-icons/FontAwesome';
import VolumeIcon from 'react-native-vector-icons/Feather';
import ExitIcon from 'react-native-vector-icons/Ionicons';
import CallIcon from 'react-native-vector-icons/Ionicons';

import {BACKGROUND} from '@styles/color';
import Dumbbell from '@assets/image/dumbbell.svg';
import Header from '@components/structure/Header';

ArmIcon.loadFont();
PlayIcon.loadFont();
SmileIcon.loadFont();

const {height} = Dimensions.get('window');
let heartCount = 0;
const animationEndY = Math.ceil(height * 0.7);
const negativeEndY = animationEndY * -1;

const getColorUsingIndex = (index: number) => {
  const colors: string[] = [
    'rgb(75,110,180)',
    'rgb(180,100,80)',
    'rgb(95,50,145)',
    'rgb(90,200,90)',
  ];
  return colors[index % colors.length];
};

const getSizeUsingIndex = (index: number) => {
  const size: number[] = [40, 20, 60];
  return size[index % size.length];
};

function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const ZoomStudyScreen = ({navigation}: {navigation?: any}) => {
  const [hearts, setHearts] = useState<any[]>([]);

  const addHeart = () => {
    heartCount++;
    setHearts([...hearts, {id: heartCount, right: getRandomNumber(10, 130)}]);
  };

  const removeHeart = (id: number) => {
    const tmp = hearts.filter((heart) => heart.id !== id);
    // setHearts(tmp);
    // console.log(hearts);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'rgb(50,50,50)'}}>
      <Header title="FITCLASS" navigation={navigation} />
      <View style={styles.container}>
        {hearts.map((heart, index) => {
          console.log(heart.id);
          return (
            <HeartContainer
              key={heart.id}
              style={{right: heart.right}}
              onComplete={() => removeHeart(heart.id)}
              index={index}
            />
          );
        })}

        <View
          style={{
            borderWidth: 1,
            width: '100%',
            height: 100,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1, borderColor: 'gray', borderRightWidth: 0.5}} />
          <View style={{flex: 1, borderColor: 'gray', borderRightWidth: 0.5}} />
          <View style={{flex: 1, borderColor: 'gray', borderRightWidth: 0.5}} />
          <View style={{flex: 1, borderColor: 'gray', borderRightWidth: 0.5}} />
        </View>
        <View
          style={{
            width: '100%',
            height: 250,
            backgroundColor: 'rgba(120,120,120,0.6)',
          }}></View>
        <View
          style={{
            width: '100%',
            height: 80,
            backgroundColor: 'rgb(30,30,30)',
            paddingHorizontal: 15,
            paddingVertical: 20,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{fontFamily: 'NanumSquareEB', color: 'white', fontSize: 15}}>
            [소확행] 소근육도 확실하게 행잉레그레이즈
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <PlayIcon
              name="play"
              style={{color: 'white', fontSize: 15, marginRight: 5}}
            />
            <Text
              style={{
                fontFamily: 'NanumSquareEB',
                color: 'white',
                fontSize: 15,
              }}>
              2,178
            </Text>
            <ArmIcon
              name="arm-flex-outline"
              style={{color: 'white', fontSize: 15, marginLeft: 10}}
            />
            <Text
              style={{
                fontFamily: 'NanumSquareEB',
                color: 'white',
                fontSize: 15,
              }}>
              1,768
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 200,
            backgroundColor: 'rgb(45,45,45)',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 50,
            width: '100%',
            backgroundColor: 'rgb(45,45,45)',
            paddingHorizontal: 10,
            paddingBottom: 7,
          }}>
          <View
            style={{
              width: '85%',
              height: '100%',
              backgroundColor: 'rgb(30,30,30)',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              borderRadius: 7,
            }}>
            <SmileIcon
              name="smile-o"
              style={{color: 'rgb(150,150,150)', fontSize: 25}}
            />
            <Text
              style={{
                fontFamily: 'NanumSquareEB',
                color: 'rgba(150,150,150, 0.7)',
                fontSize: 14,
                marginLeft: 10,
              }}>
              대화를 나눠 보세요.
            </Text>
          </View>
          <SendIcon
            name="send"
            style={{color: 'rgb(150,150,150)', fontSize: 25, marginRight: 13}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingHorizontal: 20,
            width: '100%',
            height: 80,
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 60,
              backgroundColor: 'rgb(90,90,90)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ExitIcon
              name="exit-outline"
              style={{fontSize: 35, color: 'white', marginLeft: 5}}
            />
          </View>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 60,
              backgroundColor: 'rgb(90,90,90)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <VolumeIcon
              name="volume-2"
              style={{fontSize: 35, color: 'white'}}
            />
          </View>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 60,
              backgroundColor: 'rgb(255,84,84)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CallIcon name="call" style={{fontSize: 35, color: 'white'}} />
          </View>
          <TouchableOpacity
            onPress={() => addHeart()}
            style={{
              width: 60,
              height: 60,
              borderRadius: 60,
              backgroundColor: 'rgb(90,90,90)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ArmIcon
              name="arm-flex-outline"
              style={{color: 'white', fontSize: 35}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const HeartContainer = (props) => {
  const [position, setPosition] = useState(new Animated.Value(0));

  const yAnimation = useRef<any>(0);
  const opacityAnimation = useRef<any>(0);
  const scaleAnimation = useRef<any>(0);

  const getHeartStyle = () => {
    return {
      transform: [{translateY: position}, {scale: scaleAnimation.current}],
      opacity: opacityAnimation.current,
    };
  };

  useEffect(() => {
    yAnimation.current = position.interpolate({
      inputRange: [negativeEndY, 0],
      outputRange: [animationEndY, 0],
    });

    opacityAnimation.current = yAnimation.current.interpolate({
      inputRange: [0, animationEndY],
      outputRange: [1, 0],
    });

    scaleAnimation.current = yAnimation.current.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 1.4, 1],
      extrapolate: 'clamp',
    });
    Animated.timing(position, {
      duration: 2000,
      toValue: negativeEndY,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(props.onComplete);
  }, []);

  return (
    <Animated.View
      style={[styles.heartContainer, getHeartStyle(), props.style]}>
      <Heart index={props.index} />
    </Animated.View>
  );
};

const Heart = (props) => {
  const size = getSizeUsingIndex(props.index);
  const color = getColorUsingIndex(props.index);
  return (
    <View>
      <Dumbbell width={size} height={size} fill={color} />
    </View>
  );
};

export default ZoomStudyScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND,
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  heartContainer: {
    position: 'absolute',
    bottom: 30,
    zIndex: 333,
    backgroundColor: 'transparent',
  },
  heart: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
