import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import {HomeStack} from './StackNavigation';
import MessageScreen from '../screens/MessageScreen';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

const Drawer = createDrawerNavigator();

function DrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity
        style={styles.profileContainer}
        onPress={() => {
          props.navigation.navigate('Profile');
        }}>
        <Image
          source={require('../assets/images/avatar-blue.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Adisa Ibrahim</Text>
        <Text style={styles.description}>Software Engineer</Text>
      </TouchableOpacity>
      <DrawerItemList {...props} />
      <DrawerItem
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginTop: '100%'}}
        label="Logout"
        onPress={() => alert('Link to help')}
        icon={() => (
          <Image
            source={require('../assets/images/avatar-blue.png')}
            style={styles.logoutImage}
          />
        )}
        //   icon=({focused, color, size }: {}) => <Icon color={color} size={size} name={focused ? 'heart' : 'heart-outline'} />
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigation() {
  const dimensions = useWindowDimensions();

  // Adjust the width and height according to your design

  return (
    <Drawer.Navigator
      backBehavior="history"
      drawerContent={props => (
        <DrawerContent
          {...props}
          screenOptions={{
            drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
            drawerActiveTintColor: 'white',
            drawerActiveBackgroundColor: '#003CB3',
            drawerLabelStyle: {
              color: 'white',
            },
          }}
        />
      )}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Messages" component={MessageScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 16,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
  },
  logoutImage: {
    borderTopColor: '#ccc',
    width: 20,
    height: 20,

    borderBottomColor: '#ccc',
  },
});
