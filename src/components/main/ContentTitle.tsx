import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type ContentTitleProps = {
  title: string;
  subTitle: string;
};

function ContentTitle({title = '', subTitle = ''}: ContentTitleProps) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </>
  );
}

export default ContentTitle;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontFamily: 'NanumSquareEB',
    fontSize: 28,
    letterSpacing: 0.7,
  },
  subTitle: {
    color: 'white',
    fontFamily: 'NanumSquareR',
    fontSize: 13,
    marginTop: 5,
  },
});
