import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabs} from './TabNavigator';

import MessageScreen from '../screens/MessageScreen';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Shipments"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Messages"
        component={MessageScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

// import DrawerNavigation from './DrawerNavigation';
// <Stack.Screen name="Drawer" component={DrawerNavigation} />
