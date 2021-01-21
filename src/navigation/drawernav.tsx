import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DefaultNavigationContainer from '@navigation/stacknav';
import PeopleIcon from 'react-native-vector-icons/Ionicons';
import ProfileIcon from 'react-native-vector-icons/AntDesign';

PeopleIcon.loadFont();
ProfileIcon.loadFont();

const Drawer = createDrawerNavigator();

const defaultOptions: DrawerNavigationOptions = {
  headerShown: false,
};
function DrawerNavigationContainer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#323232',
          width: 260,
        }}
        drawerContentOptions={{
          labelStyle: {color: '#fff', fontFamily: 'OpenSauceSans-Medium'},
        }}>
        <Drawer.Screen
          name="Main"
          component={({navigation}) => (
            <DefaultNavigationContainer
              defaultscreen={'Main'}
              navigation={navigation}
            />
          )}
          options={{
            title: 'Main',
            drawerIcon: ({focused}) => (
              <PeopleIcon
                name="home"
                style={[focused ? styles.profileimage : styles.profileimage2]}
                size={30}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={({navigation}) => (
            <DefaultNavigationContainer
              defaultscreen={'Profile'}
              navigation={navigation}
            />
          )}
          options={{
            title: 'Profile',
            drawerIcon: ({focused}) => (
              <ProfileIcon
                name="profile"
                style={[focused ? styles.profileimage : styles.profileimage2]}
                size={30}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="WorkoutStudy"
          component={({navigation}) => (
            <DefaultNavigationContainer
              defaultscreen={'WorkoutStudy'}
              navigation={navigation}
            />
          )}
          options={{
            title: 'WorkoutStudy',
            drawerIcon: ({focused}) => (
              <PeopleIcon
                name="people"
                style={[focused ? styles.profileimage : styles.profileimage2]}
                size={30}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="MyClass"
          component={({navigation}) => (
            <DefaultNavigationContainer
              defaultscreen={'MyClass'}
              navigation={navigation}
            />
          )}
          options={{
            title: 'MyClass',
            drawerIcon: ({focused}) => (
              <PeopleIcon
                name="person"
                style={[focused ? styles.profileimage : styles.profileimage2]}
                size={30}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigationContainer;

const styles = StyleSheet.create({
  profileimage: {
    width: 50,
    height: 50,
    marginLeft: 5,
    paddingHorizontal: 5,
    marginTop: 10,
    color: '#fff',
  },
  profileimage2: {
    width: 40,
    height: 40,
    marginLeft: 5,
    paddingHorizontal: 5,
    marginTop: 10,
    color: '#fff',
  },
});
