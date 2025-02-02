import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {RootTabs} from './src/navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootTabs />
    </NavigationContainer>
  );
}
