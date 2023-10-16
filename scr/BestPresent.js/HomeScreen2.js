import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Dimensions, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const URL = 'https://fakestoreapi.com/products';

const HomeScreen2 = (props) => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);

  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;

  const data = [
    { id: '1', text: 'Birthday' },
    { id: '2', text: 'Eid' },
    { id: '3', text: 'Thanksgiving' },
    { id: '4', text: 'Christmas' },
    { id: '5', text: 'Anniversary' },
    { id: '6', text: 'NewYear' },
    { id: '7', text: 'LabourDay' },
    { id: '8', text: 'Independence' },
    { id: '9', text: 'Valentine' },
  ];

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
    item.title.toLowerCase().includes(searchText.toLowerCase()) &&
    (!selectedTag || data.some((tag) => tag.text.toLowerCase() === selectedTag.toLowerCase()))
  );

  const handleTagPress = (tag) => {
    setSelectedTag(tag);
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen1', { item })}>
      <View>
        <Image source={{ uri: item.image }} style={{ width: 147, resizeMode: 'contain', height: 207, borderRadius: 20, margin: 10 }} />
        <Text style={{ fontWeight: '800' }}>{item.title.length > 12 ? item.title.substring(0, 12) + '...' : item.title}</Text>
        <Text> Rs:{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderTagItem = ({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: selectedTag === item.text ? 'gray' : 'white',
        padding: 5,
        margin: 5,
        borderRadius: 35,
        width: width / 3,
        height: height / 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => handleTagPress(item.text)}
    >
      <Text style={{ color: selectedTag === item.text ? 'white' : 'black' }}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#FCF6F7', padding: 20, justifyContent: 'space-between' }}>
      <ImageBackground style={{ width: width, height: height / 18 }} source={require('../assets/gift1.png')}></ImageBackground>
     
      <View style={{ flex: 0.05 }}>
        <Image style={{ position: 'absolute', right: 5, height: height / 20, width: width / 8 }} source={require('../assets/a.png')} />
        <Image
          style={{ position: 'absolute', left: 5, height: height / 25, width: width / 20 }}
          source={require('../assets/apps.png')}
        />
      </View>
      
      <View style={{ flex: 0.5 }}>
        <Text style={{ fontSize: 35, fontWeight: '600', marginVertical: 8}}>Find best gift</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', padding: 8, borderRadius: 8, marginBottom: 10 }}
          placeholder="Search item..."
          value={searchText}
          onChangeText={handleSearch}
        />
        <Text style={{ fontSize: 25, fontWeight: '600', marginVertical: 15 }}> Popular Tags </Text>
        <FlatList
          data={data}
          horizontal
          renderItem={renderTagItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={{ flex: 0.55 }}>
        {selectedTag && (
          <View>
            <FlatList
              data={filteredContacts}
              horizontal
              renderItem={renderProductItem}
              keyExtractor={(item, index) => item.id.toString()}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default HomeScreen2;

// mmmmmm
// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, FlatList, Image, Dimensions, TextInput, ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const URL = 'https://fakestoreapi.com/products';

// const HomeScreen2 = (props) => {
//   const navigation = useNavigation();
//   const [contacts, setContacts] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   const [selectedTag, setSelectedTag] = useState(null);

//   const height = Dimensions.get('window').height;
//   const width = Dimensions.get('window').width;

//   const data = [
//     { id: '1', text: 'Birthday' },
//     { id: '2', text: 'Eid' },
//     { id: '3', text: 'Thanksgiving' },
//     { id: '4', text: 'Christmas' },
//     { id: '5', text: 'Anniversary' },
//     { id: '6', text: 'NewYear' },
//     { id: '7', text: 'LabourDay' },
//     { id: '8', text: 'Independence' },
//     { id: '9', text: 'Valentine' },
//   ];


//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     const response = await fetch(URL);
//     const json = await response.json();
//     setContacts(json);
//   };

//   const handleSearch = (text) => {
//     setSearchText(text);
//   };

//   const filteredContacts = contacts.filter((item) =>
//     item.title.toLowerCase().includes(searchText.toLowerCase())
//   );

//   const handleTagPress = (tag) => {
//     console.log('Selected Tag:', tag);
//     setSelectedTag(tag);
//   };



//   const renderProductItem = ({ item }) => (
//     <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen1', { item })}>
//       <View>
//         <Image source={{ uri: item.image }} style={{ width: 147, resizeMode: 'contain', height: 207, borderRadius: 20, margin: 10 }} />
//         <Text style={{ fontWeight: '800' }}>{item.title.length > 12 ? item.title.substring(0, 12) + '...' : item.title}</Text>
//         <Text> Rs:{item.price}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const renderTagItem = ({ item }) => (
//     <TouchableOpacity
//       style={{
//         backgroundColor: selectedTag === item.text ? 'gray' : 'white',
//         padding: 5,
//         margin: 5,
//         borderRadius: 35,
//         width: width / 3,
//         height: height / 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//       onPress={() => handleTagPress(item.text)}
//     >
//       <Text style={{ color: selectedTag === item.text ? 'white' : 'black' }}>{item.text}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={{ flex: 1, backgroundColor: '#FCF6F7', padding: 20, justifyContent: 'space-between' }}>
//       <ImageBackground style={{ width: width, height: height / 18 }} source={require('../assets/gift1.png')}></ImageBackground>
//       <View style={{ flex: 0.05 }}>
//         <Image style={{ position: 'absolute', right: 5, height: height / 20, width: width / 8 }} source={require('../assets/a.png')} />
//         <Image
//           style={{ position: 'absolute', left: 5, height: height / 25, width: width / 20 }}
//           source={require('../assets/apps.png')}
//         />

//       </View>
//       <View style={{ flex: 0.4 }}>
//         <Text style={{ fontSize: 35, fontWeight: '600', marginVertical: 10 }}>Find best gift</Text>
//         <TextInput
//           style={{ borderWidth: 1, borderColor: 'gray', padding: 8, borderRadius: 8, marginBottom: 10 }}
//           placeholder="Search items..."
//           value={searchText}
//           onChangeText={handleSearch}
//         />
//         <Text style={{ fontSize: 25, fontWeight: '600', marginVertical: 15 }}> Popular Tags </Text>
//         <FlatList
//           data={data}
//           horizontal
//           renderItem={renderTagItem}
//           keyExtractor={(item) => item.id}
//         />
//       </View>

//       <View style={{ flex: 0.45 }}>
//         {selectedTag && (
//           <View>

//             <FlatList
//               data={contacts}
//               horizontal
//               renderItem={renderProductItem}
//               keyExtractor={(item, index) => item.id.toString()}
//             />
//           </View>
//         )}

//       </View>

//     </View>
//   );
// };

// export default HomeScreen2;


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
