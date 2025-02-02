import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen, {CreatePostScreen} from '../screens/HomeScreen';
// import DetailsScreen from '../screens/DetailsScreen';

import MessageScreen from '../screens/MessageScreen';

import FeedScreen from '../screens/FeedScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Messages" component={MessageScreen} />
    </Stack.Navigator>
  );
}

//   <Stack.Screen name="Home" component={HomeScreen} />
//   <Stack.Screen
//     name="Details"
//     component={DetailsScreen}
//     initialParams={{itemId: 42}}
//   />
//   <Stack.Screen name="CreatePost" component={CreatePostScreen} />
