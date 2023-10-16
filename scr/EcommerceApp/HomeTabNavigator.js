
import {Button, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import React from 'react';
import MyCart from './MyCart';

const Tab=createBottomTabNavigator();

const HomeTabNavigator = () => (
  <Tab.Navigator screenOptions={{tabBarActiveTintColor:'pink'}}>
    <Tab.Screen  options={{headerShown: false, tabBarIcon:()=>{
       return(  <Icon name='home' size={30} />)
    }}}   name="HomeTab" component={HomeScreen} />

<Tab.Screen    options={{headerShown: false, tabBarIcon:()=>{
       return(  <Icon name='menu' size={30} />)
    }}} name="DetailsScreen" component={DetailsScreen} />
    
    <Tab.Screen   options={{headerShown: false,
     tabBarIcon:()=>{
     return(  <Icon name='cart' size={30} />)
    }}} name="MyCart" component={MyCart} />
  </Tab.Navigator>
);

export default HomeTabNavigator


