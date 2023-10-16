import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const DetailsScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#FCF6F7', padding: 10 }}>
      <View style={{ flex: 0.03, padding: 20 }}>
        <Image style={{ position: 'absolute', right: 5, height: 50, width: 50 }} source={require('../assets/a.png')} />
        <Image
          style={{ position: 'absolute', left: 5, height: 45, width: 45, paddingHorizontal: 20, marginVertical: 10 }}
          source={require('../assets/apps.png')} />
      </View>
      <Image source={{ uri: item.image }} style={{ width: 396, resizeMode: 'stretch', height: 283, margin: 10 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginRight: 5 }}>
        <View>
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
            {item.title}
          </Text>
        </View>
        <Text style={{ fontSize: 15, fontWeight: '300' }}>
          Rs: {item.price}
        </Text>
      </View>
      <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
        Ddescription:
      </Text>
      <Text>{item.description}</Text>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#55847A',
            alignItems: 'center',
            justifyContent: 'center',
            height: 44,
            width: '100%',
            paddingTop: 5,
            paddingBottom: 5,
            alignSelf: 'flex-end', // Align the button to the end of the screen

          }}
          onPress={() => navigation.navigate('MyCart', { item })}
        >
          <Text style={{ color: 'white' }}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;

