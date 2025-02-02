import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

export default function MessageScreen() {
  const navigation = useNavigation();

  React.useEffect(() => {
    const unsubscribe = navigation
      .getParent('HomeTabs')
      .addListener('tabPress', e => {
        // Do something
        alert('Feed Tab pressed!');
      });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Message Screen</Text>

      <Button onPress={() => navigation.navigate('Profile')}>
        Go to Profile
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
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
