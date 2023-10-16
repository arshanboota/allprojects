import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Screen1 = ({ navigation }) => {
  return (
    <View>
      <Text>Details</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});