
import { View, Text, Button, FlatList, TouchableOpacity, Image, Dimensions,TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const URL = 'https://fakestoreapi.com/products';

const HomeScreen = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(URL);
      const json = await response.json();
      console.log('Fetched data:', json); // Check if data is fetched correctly
      setContacts(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
        <Image style={{ position: 'absolute', right: 5, height: 50, width: 50 }} source={require('../assets/a.png')} />
        <Image
          style={{ position: 'absolute', left: 5, height: 45, width: 45, paddingHorizontal: 20, marginVertical: 10 }}
          source={require('../assets/apps.png')}
        />
      </View>

      <Text style={{ fontSize: 23, fontWeight: '600',  paddingTop: 35, marginVertical: 25 }}>Match Your Style</Text>
      <View >
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 8, borderRadius: 8, marginBottom: 10 }}
        placeholder="Search items..."
        value={searchText}
        onChangeText={handleSearch}
      />
      </View>

      <View>
        <FlatList
          numColumns={2}
          data={filteredContacts}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => props.navigation.navigate('DetailsScreen', { item })}>
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

export default HomeScreen;
/*
<View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={{}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F38181',
              alignItems: 'center',
              justifyContent: 'center',
              height: 33,
              width: 126,
              paddingTop: 5,
              borderRadius: 15,
              paddingBottom: 5,
            }}
          >
            <Text style={{ fontSize: 10, color: 'white' }}>Trending now</Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F38181',
              alignItems: 'center',
              justifyContent: 'center',
              height: 33,
              width: 81,
              paddingTop: 5,
              borderRadius: 15,
              paddingBottom: 5,
            }}
            
          >
            <Text style={{ fontSize: 10, color: 'white' }}>All</Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={{
              backgroundColor:'#F38181',
              alignItems: 'center',
              justifyContent: 'center',
              height: 33,
              width: 81,
              paddingTop: 5,
              borderRadius: 15,
              paddingBottom: 5,
              marginVertical: 4,
            }}
            
          >
            <Text style={{ fontSize: 10, color: 'white' }}>New</Text>
          </TouchableOpacity>
        </View>
      </View>
      endddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd










/*
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const URL = 'https://fakestoreapi.com/products';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState('');

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

  return (
    <View style={{ flex: 1, backgroundColor: '#FCF6F7', padding: 20 }}>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 8, borderRadius: 8, marginBottom: 10 }}
        placeholder="Search items..."
        value={searchText}
        onChangeText={handleSearch}
      />

      <FlatList
        numColumns={2}
        data={filteredContacts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', { item })}>
            <View>
              <Image
                source={{ uri: item.image }}
                style={{ width: 147, resizeMode: 'contain', height: 207, borderRadius: 20, margin: 10 }}
              />
              <Text style={{ fontWeight: '800' }}>{item.title.length > 12 ? item.title.substring(0, 12) + '...' : item.title}</Text>
              <Text>Rs: {item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;




/* pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const URL = 'https://fakestoreapi.com/products';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(URL);
      const json = await response.json();
      setContacts(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FCF6F7', padding: 20 }}>
      <View>
        <FlatList
          numColumns={2}
          data={contacts}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', { item })}>
              <View>
                <Image source={{ uri: item.image }} style={{ width: 147, resizeMode: 'contain', height: 207, borderRadius: 20, margin: 10 }} />
                <Text style={{ fontWeight: "800" }}>{item.title.length > 12 ? item.title.substring(0, 12) + '...' : item.title}</Text>
                <Text>Rs: {item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;




import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <Text>{item.title}</Text>
      <Text>Rs: {item.price}</Text>
      {/* Display other details of the item */
 /*    </View>
  );
};

export default Det */











/* pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const URL = 'https://fakestoreapi.com/products';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(URL);
      const json = await response.json();
      setContacts(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FCF6F7', padding: 20 }}>
      <View>
        <FlatList
          numColumns={2}
          data={contacts}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', { item })}>
              <View>
                <Image source={{ uri: item.image }} style={{ width: 147, resizeMode: 'contain', height: 207, borderRadius: 20, margin: 10 }} />
                <Text style={{ fontWeight: "800" }}>{item.title.length > 12 ? item.title.substring(0, 12) + '...' : item.title}</Text>
                <Text>Rs: {item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;




import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <Text>{item.title}</Text>
      <Text>Rs: {item.price}</Text>
      {/* Display other details of the item */
 /*    </View>
  );
};

export default Det */
