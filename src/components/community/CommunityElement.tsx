import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {WIDTH} from '@constants/dimensions';
import HeartIcon from 'react-native-vector-icons/Entypo';
import ChatboxIcon from 'react-native-vector-icons/Ionicons';
import PictureIcon from 'react-native-vector-icons/FontAwesome';

HeartIcon.loadFont();
ChatboxIcon.loadFont();
PictureIcon.loadFont();

const picture = [];

type RoutineElementProps = {
  data: {
    category: string;
    title: string;
    username: string;
    contents: string;
    heart: number;
    comment: number;
    picture: number;
  };
  index: number;
};

var imageSource = [
  require('@assets/image/community_thumbnail_1.jpg'),
  require('@assets/image/community_thumbnail_2.jpg'),
  require('@assets/image/community_thumbnail_3.jpg'),
];

function CommunityElement({
  data: {
    category = '',
    title = '',
    username = '',
    contents = '',
    heart = 0,
    comment = 0,
    picture = 0,
  },
  index = 0,
}: RoutineElementProps) {
  return (
    <ImageBackground
      style={styles.mainContainer}
      source={imageSource[index]}
      resizeMode="cover">
      <View style={styles.imageshader}>
        <Text style={styles.category}>{category}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>{title} | </Text>
          <Text style={styles.username}>{username}</Text>
        </View>
        <Text style={styles.contents}>{contents}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <HeartIcon name="heart" style={styles.hearticon} size={20} />
            <Text style={styles.contents}>{heart} </Text>
            <ChatboxIcon name="chatbox" style={styles.chatboxicon} size={20} />
            <Text style={styles.contents}>{comment}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <PictureIcon
              name="picture-o"
              style={styles.pictureicon}
              size={20}
            />
            <Text style={styles.contents}> {picture}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default CommunityElement;

const styles = StyleSheet.create({
  mainContainer: {
    width: WIDTH,
    height: 125,
    backgroundColor: '#161313',
  },
  imageshader: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    height: '100%',
    paddingLeft: 15,
    paddingTop: 10,
  },
  category: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'OpenSauceSans-Bold',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 8,
    fontFamily: 'OpenSauceSans-Bold',
  },
  username: {
    color: '#fff',
    fontSize: 15,
    marginTop: 6,
    fontFamily: 'OpenSauceSans-Medium',
  },
  contents: {
    color: '#fff',
    fontSize: 17,
    marginBottom: 10,
    marginRight: 10,
    fontFamily: 'OpenSauceSans-Medium',
  },
  hearticon: {
    color: '#fff',
    marginRight: 4,
  },
  chatboxicon: {
    color: '#fff',
    marginRight: 4,
    marginLeft: 8,
  },
  pictureicon: {
    color: '#fff',
    marginRight: 4,
  },
});
