import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image, StyleSheet} from 'react-native';

import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WalletScreen from '../screens/WalletScreen';
import ScanScreen from '../screens/ScanScreen';

const walletGray = require('../assets/images/wallet-gray.png');
const walletBlue = require('../assets/images/wallet-blue.png');
const boxesBlue = require('../assets/images/boxes-blue.png');
const boxesGray = require('../assets/images/boxes-gray.png');
const avatarGray = require('../assets/images/avatar-gray.png');
const avatarBlue = require('../assets/images/avatar-blue.png');
const barcodeGray = require('../assets/images/barcode-gray.png');
const barcodeBlue = require('../assets/images/barcode-blue.png');

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  logo: {width: 25, height: 25, resizeMode: 'contain'},
});

export function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Shipments"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2F50C1',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#ddd',
        },
      }}>
      <Tab.Screen
        name="Shipments"
        component={FeedScreen}
        options={{
          title: 'Shipments',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? boxesBlue : boxesGray}
              style={styles.logo}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          title: 'Scan',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? barcodeBlue : barcodeGray}
              style={styles.logo}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: 'Wallet',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? walletBlue : walletGray}
              style={styles.logo}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? avatarBlue : avatarGray}
              style={styles.logo}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
