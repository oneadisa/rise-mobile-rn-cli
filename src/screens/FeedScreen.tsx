import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

export default function FeedScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Feed Screen</Text>
      <Button onPress={() => navigation.navigate('Messages')}>
        Go to Message
      </Button>

      {/* <Button onPress={() => navigation.goBack()}>Go back</Button> */}
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
