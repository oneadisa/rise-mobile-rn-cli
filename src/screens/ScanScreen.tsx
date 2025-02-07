import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      <Text>Scan Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
