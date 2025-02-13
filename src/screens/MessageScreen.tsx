import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

export default function MessageScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Message Screen</Text>
      <Button onPress={() => navigation.goBack()}>Go Back</Button>
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
