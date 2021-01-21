import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CaretupIcon from 'react-native-vector-icons/AntDesign';

CaretupIcon.loadFont();

const graphcolor = ['#FF7D7D', '#FFBC64', '#3AFF00'];

type goalProps = {
  goalPercents: number;
  goalContents: string;
  index: number;
};

function GoalGuage({goalPercents, goalContents, index}: goalProps) {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: goalPercents / 100}}></View>
        <CaretupIcon
          name="caretdown"
          style={styles.caretupicon}
          size={15}
          color={graphcolor[index]}
        />
        <View style={{flex: 1 - goalPercents / 100}}></View>
      </View>
      <View style={styles.graph}>
        <View
          style={{
            flex: goalPercents / 100,
            backgroundColor: graphcolor[index],
            borderRadius: 5,
          }}></View>
        <View style={{flex: 1 - goalPercents / 100}}></View>
      </View>
      <View style={{flexDirection: 'row', width: '90%'}}>
        <Text style={styles.graphtext}>{goalContents}</Text>
        <View style={{flex: 1}} />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.graphtext}>현재</Text>
          <Text style={styles.graphtext}>{goalPercents}</Text>
          <Text style={styles.graphtext}>% 달성</Text>
        </View>
      </View>
    </View>
  );
}

export default GoalGuage;

const styles = StyleSheet.create({
  graphtext: {
    color: '#ffffff',
    fontFamily: 'OpenSauceSans-Bold',
    fontSize: 11,
    marginTop: 2,
  },
  graph: {
    height: 12,
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginTop: 8,
    flexDirection: 'row',
  },
  caretupicon: {
    width: 20,
  },
});
