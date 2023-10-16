import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Intro from '../Navigation/scr/Todo/Intro';
import Second from '../Navigation/scr/Todo/Second';
import Third from '../Navigation/scr/Todo/Third';
import Forth from '../Navigation/scr/Todo/Forth';

const Stack = createNativeStackNavigator();
const App = () => {
  const [hasStoredEmail, setHasStoredEmail] = useState(false);

  useEffect(() => {
    checkStoredEmail();
  }, []);

  const checkStoredEmail = async () => {
  
      const storedEmail = await AsyncStorage.getItem('Email');
      if (storedEmail=='') {
        setHasStoredEmail(true);
      }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={hasStoredEmail ?'Intro' :'Second'  }>
        <Stack.Screen options={{ headerShown: false }} name="Intro" component={Intro} />
        <Stack.Screen options={{ headerShown: false }} name="Second" component={Second} />
        <Stack.Screen options={{ headerShown: false }} name="Third" component={Third} />
        <Stack.Screen options={{ headerShown: false }} name="Forth" component={Forth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;