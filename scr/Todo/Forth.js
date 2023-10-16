import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Task6 from '../Task6';
const Forth = ({ navigation }) => {
  const [newEmail, setNewEmail] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#EDEDED' }}>
      <View style={{ flex: 0.2, backgroundColor: '#55847A', alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ padding: 30, height: 119, width: 121 }} source={require('../assets/handsome.png')} />
      </View>

      <View style={{ flex: 0.8 }}>
        <Image style={{ padding: 30, height: 150, width: 222, right: -100 ,resizeMode:'contain'}} source={require('../assets/cycle.png')} />
        <Text style={{ padding: 10, fontWeight: '700', fontSize: 17 }}> ToDo Tasks:  </Text>

        <Task6 />
      </View>
    </View>
  );
};



export default Forth;


