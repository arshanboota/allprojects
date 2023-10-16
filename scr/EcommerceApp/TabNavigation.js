import { StyleSheet, Text, View ,Alert} from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Settings } from 'react-native';
import Home from './HomeTabNavigator';
//import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();


const TabNavigation = () => {
  return (
   <Tab.Navigator screenOptions={{tabBarActiveTintColor:'red'}}>
    <Tab.Screen options={{ title:'Details' }} name='Home' component={Home}></Tab.Screen>
 
   </Tab.Navigator>
  );
}

export default TabNavigation

const styles = StyleSheet.create({})