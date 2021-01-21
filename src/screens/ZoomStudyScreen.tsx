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
import Svg, {Path} from 'react-native-svg';

import {BACKGROUND} from '@styles/color';
import Dumbbell from '@assets/image/dumbbell.svg';

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
    setHearts([...hearts, {id: heartCount, right: getRandomNumber(20, 150)}]);
  };

  const removeHeart = (id: number) => {
    const tmp = hearts.filter((heart) => heart.id !== id);
    // setHearts(tmp);
    // console.log(hearts);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'rgb(50,50,50)'}}>
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
      </View>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'cyan',
          position: 'absolute',
          bottom: 100,
          left: 40,
        }}
        onPress={() => addHeart()}></TouchableOpacity>
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
      {/* <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 511.999 511.999"
        fill="#FFF"
        stroke="#FFF"
        stroke-width={0.6}
        {...props}>
        <Path
          fill="#FFF"
          stroke="#FFF"
          d="M503.058 157.279l-42.338-42.338 31.827-31.815a14.986 14.986 0 00.001-21.209l-42.612-42.612c-5.625-5.625-15.586-5.625-21.211 0L396.91 51.132 354.566 8.786c-11.715-11.715-30.71-11.715-42.426 0-11.717 11.715-11.717 30.71 0 42.426l148.491 148.493c11.717 11.715 30.712 11.715 42.427 0s11.715-30.71 0-42.426zM199.86 460.786L51.369 312.293c-11.717-11.715-30.71-11.715-42.427 0-11.715 11.717-11.715 30.712 0 42.427l42.345 42.345-31.765 31.752c-2.813 2.813-4.395 6.621-4.395 10.605s1.582 7.793 4.395 10.605l42.612 42.598c2.929 2.931 6.767 4.396 10.605 4.396s7.676-1.465 10.605-4.395l31.752-31.752 42.338 42.339c11.715 11.715 30.71 11.715 42.426 0 11.717-11.717 11.717-30.712 0-42.427zM269.713 178.492l-91.066 91.376 63.64 63.64 91.066-91.378zM460.632 242.131L269.713 51.212c-11.715-11.715-30.711-11.715-42.426 0-11.717 11.717-11.717 30.71 0 42.427l190.919 190.919c11.715 11.715 30.71 11.715 42.426 0 11.717-11.715 11.717-30.71 0-42.427zM284.714 418.36L93.794 227.44c-11.715-11.715-30.71-11.715-42.425 0-11.717 11.717-11.717 30.712 0 42.427l190.919 190.919c11.715 11.715 30.71 11.715 42.426 0 11.717-11.715 11.717-30.71 0-42.426z"
        />
      </Svg> */}
    </View>
  );
};

export default ZoomStudyScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  heartContainer: {
    position: 'absolute',
    bottom: 30,
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
