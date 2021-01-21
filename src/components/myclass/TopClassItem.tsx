import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import HeartIcon from 'react-native-vector-icons/Entypo';
import SmileIcon from 'react-native-vector-icons/Feather';
HeartIcon.loadFont();
SmileIcon.loadFont();

import truncateString from '@utils/truncateString';

type PTClassListItemProps = {
  data: {title: string; trainerName: string; heart: number; smile: number};
  index: number;
};

function PTClassListItem({
  data: {title = '', trainerName = '', heart = 0, smile = 0},
  index = 0,
}: PTClassListItemProps) {
  var imageSource = [
    require('@assets/image/class_thumbnail_1.jpg'),
    require('@assets/image/class_thumbnail_2.jpg'),
    require('@assets/image/class_thumbnail_3.jpg'),
  ];
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={imageSource[index % 3]} />
      <Text style={styles.name}>트레이너 {trainerName}</Text>
      <Text style={styles.title}>{truncateString(title, 15)}</Text>
      <View style={styles.subItem}>
        <HeartIcon name="heart" style={styles.heartIcon} />
        <Text style={styles.heart}>{heart}</Text>
        <SmileIcon name="smile" style={styles.smileIcon} />
        <Text style={styles.smile}>{smile}</Text>
      </View>
    </View>
  );
}

export default PTClassListItem;

const styles = StyleSheet.create({
  item: {
    width: 155,
    height: 200,
    justifyContent: 'space-between',
  },
  infoView: {
    flex: 1,
    justifyContent: 'center',
  },
  subItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 155,
    height: 155,
    backgroundColor: 'rgba(50,50,50, 0.5)',
  },
  name: {
    fontSize: 10,
    fontFamily: 'NanumSquareR',
    color: 'rgb(130,130,130)',
  },
  title: {
    fontSize: 12,
    fontFamily: 'NanumSquareEB',
    color: 'white',
  },
  heartIcon: {
    color: 'rgb(180,0,0)',
  },
  heart: {
    color: 'rgb(180,0,0)',
    fontSize: 10,
    marginLeft: 2,
  },
  smileIcon: {
    color: 'rgb(170,170,50)',
    marginLeft: 4,
  },
  smile: {
    color: 'rgb(170,170,50)',
    fontSize: 10,
    marginLeft: 2,
  },
});
