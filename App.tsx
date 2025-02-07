import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {HomeStack} from './src/navigation/StackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
