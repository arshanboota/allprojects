import { View, Text, FlatList, Image, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';

const Task6 = () => {
  const [contacts, setContacts] = useState([
    { name: require('./scr/assets/both.png') },
    { name: require('./scr/assets/man.png') },
    { name: require('./scr/assets/handsome.png') },
    { name: require('./scr/assets/handsome.png') },
    { name: require('./scr/assets/handsome.png') },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImageModal(true);
  };

  const hideImageModal = () => {
    setShowImageModal(false);
    setSelectedImage(null);
  };

  const renderContacts = ({ item }) => (
    <TouchableOpacity onPress={() => handleImageClick(item.name)}>
      <View>
        <Image source={item.name} style={{ width: 150, height: 150, marginRight: 10 }}  />
      </View>
    </TouchableOpacity>
  );

  const renderContacts1 = ({ item }) => (
    <TouchableOpacity onPress={() => handleImageClick(item.name)}>
      <View>
        <Image source={item.name} style={{ width: 450, height: 550, marginRight: 10 }}  />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View>
        <FlatList horizontal data={contacts} renderItem={renderContacts} keyExtractor={(item, index) => index.toString()} />
      </View>

      <View>
        <FlatList data={contacts} renderItem={renderContacts1} keyExtractor={(item, index) => index.toString()} />
      </View>

      
        <Modal visible={showImageModal} transparent animationType="fade">
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black' }} onPress={hideImageModal}>
            <View style={{ backgroundColor: 'black', padding: 20 }}>
              <Image source={selectedImage} style={{ width: '100%', height: 300 }}  />
              <Text style={{ marginTop: 10,color:'white' }}>
                What is an image called? Today, most people consider an image, picture, and photograph (photo) as synonyms (the same word) when talking about a visual representation of an object on a computer.
              </Text>
            </View>
          </TouchableOpacity>
        </Modal>
      
    </View>
  );
};

export default Task6;





/* import { View, Text } from 'react-native';
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
//////////////////////
import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Intro from '../Navigation/scr/Todo/Intro';
import Second from '../Navigation/scr/Todo/Second';
import Third from '../Navigation/scr/Todo/Third';
import Forth from '../Navigation/scr/Todo/Forth';
import Splash from './scr/Flatlist.js/Splash';
const Stack = createNativeStackNavigator();
const App = () => {
  const [hasStoredEmail, setHasStoredEmail] = useState(false);

  useEffect(() => {
    setTimeout(()=>{
      return(
      setHasStoredEmail(true))
       },6000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator >
   {hasStoredEmail ? ( <Stack.Screen options={{ headerShown: false }} name="splash" component={Splash}/>) : null }
        <Stack.Screen options={{ headerShown: false }} name="Intro" component={Intro} />
        <Stack.Screen options={{ headerShown: false }} name="Second" component={Second} />
        <Stack.Screen options={{ headerShown: false }} name="Third" component={Third} />
        <Stack.Screen options={{ headerShown: false }} name="Forth" component={Forth} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; */