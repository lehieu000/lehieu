import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
      }}>
      <Text>Home!</Text>
      <Button
        title={'goto Detail'}
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}
function DetailScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}>
      <Text>DetailScreen</Text>
      <Button title={'go back'} onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
const StackHome = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

function TabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={StackHome}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('../images/home.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? 'red' : 'black',
                  }}
                />
                <Text
                  style={{
                    color: focused ? 'red' : 'black',
                    fontSize: 12,
                  }}></Text>
              </View>
            ),
          }}
        />
        <Tab.Screen name="Home1" component={StackHome} />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('../images/settings.png')}
                  resizeMode="center"
                  style={{
                    tintColor: focused ? 'red' : 'black',
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default TabBar;
