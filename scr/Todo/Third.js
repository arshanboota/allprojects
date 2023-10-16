import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Second = ({ navigation }) => {
  const [newEmail, setNewEmail] = useState('');


  const storeEmail = async (email) => {
    
      await AsyncStorage.setItem('storedEmail', email);
    
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#EDEDED', padding: 25, margin: 20 }}>
      <Text style={{ paddingTop: 30, paddingBottom: 15, textAlign: 'center', fontSize: 20, fontWeight: '900' }}> Welcome Back!</Text>
      <Image style={{ padding: 100 }} source={require('../assets/man.png')} />

      <TextInput
        style={{
          height: 38,
          fontWeight: '600',
          fontSize: 11,
          borderColor: 'white',
          borderRadius: 10,
          backgroundColor: 'white',
          borderWidth: 1,
          paddingHorizontal: 20,
          marginVertical: 15
        }}
        placeholder='Enter your Email address'
        onChangeText={(text) => setNewEmail(text)}
        value={newEmail}
      />

      <TextInput
        style={{
          height: 38,
          fontWeight: '600',
          fontSize: 11,
          borderColor: 'white',
          borderRadius: 10,
          backgroundColor: 'white',
          borderWidth: 1,
          paddingHorizontal: 20,
          marginVertical: 15
        }}
        placeholder='Confirm your Password'
      />

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ padding: 15, fontWeight: '400', fontSize: 14, textAlign: 'center', paddingBottom: 4, color: '#55847A' }}>
          Forgot Password?
        </Text>
        <TouchableOpacity style={{ backgroundColor: '#55847A', alignItems: 'center', justifyContent: 'center', height: 44, width: 220, paddingTop: 5, paddingBottom: 4, marginVertical: 40 }} onPress={() => {
          // Store the entered email when the "Sign In" button is pressed
          storeEmail(newEmail);
          navigation.navigate('Forth');
        }}>
          <Text style={{ fontSize: 20, color: 'white' }}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <View>
          <Text style={{ fontWeight: '400', fontSize: 14, paddingBottom: 30 }}>  Don't have an account?</Text>
        </View>
        <View>
          <Text style={{ fontWeight: '600', fontSize: 14, paddingBottom: 30 }}> Sign up</Text>
        </View>
      </View>
    </View>
  );
};

export default Second;



/*
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Second = ({ navigation }) => {
  const [newEmail, setNewEmail] = useState('');


  const storeEmail = async (email) => {
      await AsyncStorage.setItem('storedEmail', email);
  };

const validationEmail =(newEmail)=>{
if(newEmail=='')
{
    Alert('Please Enter Name');
}
else{
  Alert('Good')
}
};

const validation =(newEmail)=>{
  storeEmail(newEmail)
  validationEmail(newEmail)
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#EDEDED', padding: 25, margin: 20 }}>
      <Text style={{ paddingTop: 50, paddingBottom: 15, textAlign: 'center', fontSize: 20, fontWeight: '900' }}> Welcome Back!</Text>
      <Image style={{ padding: 100 }} source={require('../assets/man.png')} />

      <TextInput
        style={{
          height: 38,
          fontWeight: '600',
          fontSize: 11,
          borderColor: 'white',
          borderRadius: 10,
          backgroundColor: 'white',
          borderWidth: 1,
          paddingHorizontal: 20,
          marginVertical: 15
        }}
        placeholder='Enter your Email address'
        onChangeText={(text) => setNewEmail(text)}
        value={newEmail}
      />

      <TextInput
        style={{
          height: 38,
          fontWeight: '600',
          fontSize: 11,
          borderColor: 'white',
          borderRadius: 10,
          backgroundColor: 'white',
          borderWidth: 1,
          paddingHorizontal: 20,
          marginVertical: 15
        }}
        placeholder='Confirm your Password'
      />

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ padding: 15, fontWeight: '400', fontSize: 14, textAlign: 'center', paddingBottom: 4, color: '#55847A' }}>
          Forgot Password?
        </Text>
        <TouchableOpacity style={{ backgroundColor: '#55847A', alignItems: 'center', justifyContent: 'center', height: 44, width: 220, paddingTop: 5, paddingBottom: 4, marginVertical: 40 }} onPress={() => {
          // Store the entered email when the "Sign In" button is pressed
          
          validation (newEmail);
          navigation.navigate('Forth');
        }}>
          <Text style={{ fontSize: 20, color: 'white' }}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <View>
          <Text style={{ fontWeight: '400', fontSize: 14, paddingBottom: 30 }}>  Don't have an account?</Text>
        </View>
        <View>
          <Text style={{ fontWeight: '600', fontSize: 14, paddingBottom: 30 }}> Sign up</Text>
        </View>
      </View>
    </View>
  );
};

export default Second;
*/ 