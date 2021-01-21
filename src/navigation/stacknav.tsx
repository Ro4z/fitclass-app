import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import {BACKGROUND} from '@styles/color';
import ProfileScreen from '@screens/ProfileScreen';
import MainScreen from '@screens/MainScreen';
import WorkoutStudyScreen from '@screens/WorkoutStudyScreen';
import MyClassScreen from '@screens/MyClassScreen';
import ZoomStudyScreen from '@screens/ZoomStudyScreen';
import WikiScreen from '@screens/WikiScreen';
import CommunityScreen from '@screens/CommunityScreen';

const Stack = createStackNavigator();

const defaultOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: BACKGROUND,
  },
};
type NavigationProps = {
  defaultscreen: string;
  navigation?: any;
};

function DefaultNavigationContainer({
  defaultscreen,
  navigation,
}: NavigationProps) {
  return (
    <Stack.Navigator initialRouteName={defaultscreen}>
      <Stack.Screen
        name="Main"
        component={({navigation}) => <MainScreen navigation={navigation} />}
        options={defaultOptions}
      />
      <Stack.Screen
        name="Profile"
        component={({navigation}) => <ProfileScreen navigation={navigation} />}
        options={defaultOptions}
      />
      <Stack.Screen
        name="WorkoutStudy"
        component={({navigation}) => (
          <WorkoutStudyScreen navigation={navigation} />
        )}
        options={defaultOptions}
      />
      <Stack.Screen
        name="MyClass"
        component={({navigation}) => <MyClassScreen navigation={navigation} />}
        options={defaultOptions}
      />
      <Stack.Screen
        name="ZoomStudy"
        component={({navigation}) => (
          <ZoomStudyScreen navigation={navigation} />
        )}
        options={defaultOptions}
      />
      <Stack.Screen
        name="Wiki"
        component={({navigation}) => <WikiScreen navigation={navigation}/>} 
        options={defaultOptions}
        />
      <Stack.Screen
        name="Community"
        component={({navigation}) => (
          <CommunityScreen navigation={navigation} />
        )}
        options={defaultOptions}
      />
    </Stack.Navigator>
  );
}
export default DefaultNavigationContainer;
