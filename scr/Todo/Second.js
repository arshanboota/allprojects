import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const Second = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EDEDED', padding: 25, margin: 5 }}>
      <Text style={{ paddingTop: 40, paddingBottom: 10, textAlign: 'center', fontSize: 20, fontWeight: '900' }} > Welcome Onboard!</Text>
      <Text style={{ padding: 15, fontWeight: '400', fontSize: 14, textAlign: 'center', paddingBottom: 30, color: '#55847A' }}>
        Let's help you meet up your task
      </Text>

      <TextInput style={{ height: 38, fontWeight: '800', fontSize: 11, borderColor: 'white', borderRadius: 10, backgroundColor: 'white', borderWidth: 1, paddingHorizontal: 20, marginVertical: 15 }}
        placeholder='Ente your Full Name' />
      <TextInput style={{ height: 38, fontWeight: '800', fontSize: 11, borderColor: 'white', borderRadius: 10, backgroundColor: 'white', borderWidth: 1, paddingHorizontal: 20, marginVertical: 15 }}
        placeholder='Enter your Email address' />
      <TextInput style={{ height: 38, fontWeight: '800', fontSize: 11, borderColor: 'white', borderRadius: 10, backgroundColor: 'white', borderWidth: 1, paddingHorizontal: 20, marginVertical: 15 }}
        placeholder='Create a Passward' />
      <TextInput style={{ height: 38, fontWeight: '800', fontSize: 11, borderColor: 'white', borderRadius: 10, backgroundColor: 'white', borderWidth: 1, paddingHorizontal: 20, marginVertical: 15 }}
        placeholder='Confirm your Passward' />
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{ backgroundColor: '#55847A', alignItems: 'center', justifyContent: 'center', height: 44, width: 220, paddingTop: 5, paddingBottom: 5, marginVertical: 40 }} onPress={() => navigation.navigate('Third')}>
          <Text style={{ fontSize: 20, color: 'white' }} >Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', padding: 20 ,justifyContent:'center',alignItems:'center'}}>
        <View>
          <Text style={{ fontWeight: '400', fontSize: 14, paddingBottom: 30 }}>  Already have an account?</Text>
        </View>
        <View>
          <Text style={{ color: '#55847A', fontWeight: '400', fontSize: 14, paddingBottom: 30 }}> Sign in</Text>
        </View>
      </View>
    </View>
  )
}

export default Second