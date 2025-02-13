import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

export default function FeedScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text>Shipments</Text>
      <Button onPress={() => navigation.navigate('Messages')}>
        Go to Messages
      </Button>
      {/* <Button onPress={() => navigation.navigate('Drawer')}>
        Go to Drawer
      </Button> */}
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
