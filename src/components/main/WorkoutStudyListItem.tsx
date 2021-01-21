import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const getColorUsingIndex = (index: number) => {
  const colors: string[] = [
    'rgb(75,110,180)',
    'rgb(180,100,80)',
    'rgb(95,50,145)',
  ];
  return colors[index % colors.length];
};

type WorkoutStudyListItemProps = {
  data: {
    title: string;
    numOfMembers: number;
  };
  index: number;
};

function WorkoutStudyListItem({
  data: {title = '', numOfMembers = 0},
  index = 0,
}: WorkoutStudyListItemProps) {
  return (
    <View style={[styles.item, {backgroundColor: getColorUsingIndex(index)}]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subView}>
        <View style={styles.redDot} />
        <Text style={styles.numOfMembers}>{numOfMembers}명 참여중</Text>
      </View>
    </View>
  );
}

export default WorkoutStudyListItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    borderRadius: 5,
    padding: 10,
  },
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'NanumSquareR',
    color: 'rgb(220,220,220)',
  },
  redDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  numOfMembers: {
    fontFamily: 'NanumSquareR',
    fontSize: 12,
    marginLeft: 5,
    color: 'rgb(220,220,220)',
  },
});
