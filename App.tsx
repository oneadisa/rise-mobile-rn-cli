import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import {HomeStack} from './src/navigation/StackNavigation';
import DrawerNavigation from './src/navigation/DrawerNavigation';

export default function App() {
  return (
    <NavigationContainer>
      {/* <HomeStack /> */}
      <DrawerNavigation />
    </NavigationContainer>
  );
}
