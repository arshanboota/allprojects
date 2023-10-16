import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabNavigator from './scr/EcommerceApp/HomeTabNavigator';
import DetailsScreen from './scr/EcommerceApp/DetailsScreen';
import HomeScreen from './scr/EcommerceApp/HomeScreen';
import MyCart from './scr/EcommerceApp/MyCart';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  options={{headerShown: false}} name="Home" component={HomeTabNavigator} />
        <Stack.Screen  options={{headerShown: false}} name="Details" component={DetailsScreen} />
        <Stack.Screen  options={{headerShown: false}}name="MyCart" component={MyCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



/* Icons
import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
const App = () => {
   const fun = () =>{
    <Text> Gtyfghvb</Text>
   }
  return (
    <View>
      <Text>App</Text>
      <Icon name='add' size={30} color="red"  onPress={fun}/>
      <Icon name='menu' size={30} color="red" />
      <Icon name='cart' size={30} color="red" />
        <Icon.Button
    name='add'
    backgroundColor="#3b5998"
    onPress={fun}
  />
    </View>
  )
}
export default App */