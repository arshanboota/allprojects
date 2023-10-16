import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './scr/WeatherApp/Details';
import Home from './scr/WeatherApp/Home';
import Cards from './scr/WeatherApp/Cards';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen  options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen  options={{headerShown: false}} name="Details" component={Details} />
        <Stack.Screen  options={{headerShown: false}} name="Cards" component={Cards} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
  
};

export default App;