import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const getColorUsingIndex = (index: number) => {
  const colors: string[] = [
    'rgb(75,110,180)',
    'rgb(180,100,80)',
    'rgb(95,50,145)',
  ];
  return colors[index % colors.length];
};

var imageSource = [
  require('@assets/image/study_thumbnail_1.jpg'),
  require('@assets/image/study_thumbnail_2.jpg'),
  require('@assets/image/study_thumbnail_3.jpg'),
];

type PopularStudyListItemProps = {
  data: {
    title: string;
    numOfMembers: number;
  };
  index: number;
  navigation?: any;
};

function PopularStudyListItem({
  data: {title, numOfMembers},
  index = 0,
  navigation,
}: PopularStudyListItemProps) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ZoomStudy')}>
      <ImageBackground
        style={[styles.item, {backgroundColor: getColorUsingIndex(index)}]}
        source={imageSource[index % 3]}>
        <View style={styles.blurView}>
          <Text style={styles.mainText}>#{index + 1}</Text>
          <View style={styles.infoView}>
            <Text style={styles.mainText}>{title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.whiteDot} />
              <Text style={styles.subText}>{numOfMembers}명 참여중</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default PopularStudyListItem;

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 100,
  },
  blurView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    paddingTop: 12,
    paddingBottom: 7,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  infoView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  mainText: {
    fontFamily: 'NanumSquareEB',
    color: 'rgb(220,220,220)',
    fontSize: 18,
  },
  subText: {
    fontFamily: 'NanumSquareR',
    color: 'rgb(220,220,220)',
    fontSize: 15,
  },
  whiteDot: {
    height: 8,
    width: 8,
    borderRadius: 8,
    backgroundColor: 'rgb(220,220,220)',
    marginRight: 5,
  },
});
