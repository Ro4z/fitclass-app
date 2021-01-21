import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MenuIcon from 'react-native-vector-icons/Entypo';
import SearchIcon from 'react-native-vector-icons/Feather';
import {DrawerActions} from '@react-navigation/native';

MenuIcon.loadFont();
SearchIcon.loadFont();

type HeaderProps = {
  title: string;
  navigation?: any;
};
function Header({title = '', navigation}: HeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <MenuIcon name="menu" style={styles.menuIcon} size={30} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={null}>
        <SearchIcon name="search" style={styles.searchIcon} size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 55,
    backgroundColor: 'rgb(50,50,50)',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontFamily: 'OpenSauceSans-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  menuIcon: {
    color: '#ffffff',
    marginLeft: 15,
  },
  searchIcon: {
    color: '#ffffff',
    marginRight: 15,
  },
});

export default Header;
