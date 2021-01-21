import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type RoutineElementProps = {
  data: {elementstatus: number; title: string};
};

const color = ['#3AFF00', '#FFBC64', '#FF0000'];

function RoutineElememt({
  data: {elementstatus = 0, title = ''},
}: RoutineElementProps) {
  return (
    <View style={styles.mainContainer}>
      <View
        style={[styles.square, {backgroundColor: color[elementstatus]}]}></View>
      <Text style={styles.routinetext}> {title} </Text>
    </View>
  );
}

export default RoutineElememt;

const styles = StyleSheet.create({
  mainContainer: {
    height: 20,
    marginBottom: 10,
    flexDirection: 'row',
  },
  square: {
    width: 15,
    height: 15,
    marginLeft: 10,
    marginTop: 2.5,
  },
  routinetext: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 5,
    fontFamily: 'OpenSauceSans-Medium',
  },
});
