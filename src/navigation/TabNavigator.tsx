import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './StackNavigation';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export function RootTabs() {
  return (
    <Tab.Navigator id="HomeTabs">
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
