
import {Button, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen2 from './HomeScreen2';
import DetailsScreen1 from './DetailsScreen1';
import React from 'react';
import MyCart1 from './MyCart1';
import First from './First';
import Collections from './Collections';

const Tab=createBottomTabNavigator();

const HomeTabNavigator1 = () => (
  <Tab.Navigator screenOptions={{tabBarActiveTintColor:'pink'}}>
   <Tab.Screen
  options={{
    headerShown: false,
    tabBarIcon: () => <Icon name='home' size={30} />,
    tabBarLabel: '' 
  }}
  name="HomeTabNavigator1"
  component={First}
/>


    <Tab.Screen  options={{headerShown: false, tabBarIcon:()=>
         <Icon name='search' size={30} />,
       tabBarLabel: '' 
    }}   name="HomeScreen2" component={HomeScreen2} />

<Tab.Screen  options={{headerShown: false, tabBarIcon:()=>
         <Icon name='grid-outline' size={20} />,
       tabBarLabel: '' 
    }}   name="Collections" component={Collections} />

  <Tab.Screen    options={{headerShown: false, tabBarIcon:()=>
         <Icon name='menu' size={30} />,
         tabBarLabel: '' 
    }} name="DetailsScreen1" component={DetailsScreen1} />
    
    <Tab.Screen   options={{headerShown: false,
     tabBarIcon:()=>
       <Icon name='cart' size={30} />,
       tabBarLabel: '' 
    }} name="MyCart1" component={MyCart1} />
  </Tab.Navigator>
);

export default HomeTabNavigator1


