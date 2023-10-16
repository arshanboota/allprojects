import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabNavigator1 from './scr/BestPresent.js/HomeTabNavigator1';
import DetailsScreen1 from './scr/BestPresent.js/DetailsScreen1'
import HomeScreen2 from './scr/BestPresent.js/HomeScreen2'
import MyCart1 from './scr/BestPresent.js/MyCart1';
import Collections from './scr/BestPresent.js/Collections';
import First from './scr/BestPresent.js/First';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen  options={{headerShown: false}} name="First" component={HomeTabNavigator1} />
        <Stack.Screen  options={{headerShown: false}} name="Collections" component={Collections} />
        <Stack.Screen  options={{headerShown: false}} name="HomeScreen2" component={HomeScreen2} />
        <Stack.Screen  options={{headerShown: false}} name="DetailsScreen1" component={DetailsScreen1} />
        <Stack.Screen  options={{headerShown: false}}name="MyCart1" component={MyCart1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;