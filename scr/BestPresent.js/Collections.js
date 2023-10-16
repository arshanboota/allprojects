
import { View, Text, Button, FlatList, TouchableOpacity, Image, Dimensions,TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const URL = 'https://fakestoreapi.com/products';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Collections = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const event = props.route.params.event; 
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
      const response = await fetch(URL);
      const json = await response.json();
      setContacts(json);
  };

   const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredContacts = contacts.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  

  return (
    <View style={{ flex: 1, backgroundColor: '#FCF6F7', padding: 30 }}>
      <View style={{ flex: 0.1 }}>
        <Image style={{ position: 'absolute', right: 5, height: height/20, width: width/8 }} source={require('../assets/a.png')} />
        <Image
          style={{ position: 'absolute', left: 5, height: height/25, width: width/20 }}
          source={require('../assets/apps.png')}
        />
      
      </View>

      <Text style={{ fontSize: 23, fontWeight: '600',  paddingTop: 35, marginVertical: 25 }}>Gifts for  {event}  event</Text>


      <View>
        <FlatList
          numColumns={2}
          data={filteredContacts}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => props.navigation.navigate('DetailsScreen1', { item })}>
              <View >
                <Image source={{ uri: item.image }} style={{ width: 147, resizeMode: 'contain', height: 207, borderRadius: 20, margin: 10 }} />
                <Text style={{fontWeight:"800"}}>{item.title.length > 12 ? item.title.substring(0, 12) + '...' : item.title }</Text>
                <Text> Rs:{item.price}</Text>
              </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Collections;