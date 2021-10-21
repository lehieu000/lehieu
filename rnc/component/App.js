import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main.js/Main';
import OderHistory from './OderHistory/OderHistory';
import Contact from './Main.js/Shop/Contact/Contact';
import Cart from './Main.js/Shop/Contact/Cart';
import Search from './Main.js/Shop/Search/Search';
import SignOut from './SingOut/SignOut';
import ListProduct from '../component/Main.js/Shop/ListProduct/ListProduct';
import ProductDetail from '../component/Main.js/Shop/ProductDetail/ProductDetail';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="ListProduct" component={ListProduct} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};
const Tab = createBottomTabNavigator();
const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        style={styles.styleIcon}
        name="home"
        component={StackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../source/images-master/appIcon/home.png')}
                resizeMode="center"
                style={{
                  tintColor: focused ? '#33CC99' : 'black',
                }}
              />
            </View>
          ),
          tabBarActiveTintColor: '#33CC99',
        }}
      />
      <Tab.Screen
        style={styles.styleIcon}
        name="Cart"
        component={Cart}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../source/images-master/appIcon/cart.png')}
                resizeMode="center"
                style={{
                  tintColor: focused ? '#33CC99' : 'black',
                }}
              />
            </View>
          ),
          tabBarActiveTintColor: '#33CC99',
        }}
      />
      <Tab.Screen
        style={styles.styleIcon}
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../source/images-master/appIcon/search.png')}
                resizeMode="center"
                style={{
                  tintColor: focused ? '#33CC99' : 'black',
                }}
              />
            </View>
          ),
          tabBarActiveTintColor: '#33CC99',
        }}
      />
      <Tab.Screen
        style={styles.styleIcon}
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../source/images-master/appIcon/contact.png')}
                resizeMode="center"
                style={{
                  tintColor: focused ? '#33CC99' : 'black',
                }}
              />
            </View>
          ),
          tabBarActiveTintColor: '#33CC99',
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#34B089',
            flex: 1,
          },
          drawerActiveBackgroundColor: '#34B089',
        }}>
        <Drawer.Screen
          name="open menu"
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => (
              <View>
                <View style={styles.container}>
                  <Image
                    source={require('../../source/images-master/temp/profile.png')}
                    style={styles.profile}
                  />
                </View>
                <View style={{flex: 1, marginLeft: 60}}>
                  <Text
                    style={{fontSize: 20, color: '#fff', fontFamily: 'Avenir'}}>
                    Le Trong Hieu
                  </Text>
                </View>
              </View>
            ),
          }}
          component={TabBar}
        />
        <Drawer.Screen
          name={'Authentication'}
          component={Authentication}
          options={{
            drawerLabel: () => (
              <View style={styles.btnStyle}>
                <Text style={styles.btnText}>Sign In</Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name={'OderHistory'}
          component={OderHistory}
          options={{
            drawerLabel: () => (
              <View style={styles.btnStyle}>
                <Text style={styles.btnText}>OderHistory</Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name={'ChangeInfo'}
          component={ChangeInfo}
          options={{
            drawerLabel: () => (
              <View style={styles.btnStyle}>
                <Text style={styles.btnText}>ChangeInfo</Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name={'Sign Out'}
          component={SignOut}
          options={{
            drawerLabel: () => (
              <View style={styles.btnStyle}>
                <Text style={styles.btnText}>Sign Out</Text>
              </View>
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  styleIcon: {
    height: 30,
    width: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#34B089',
    marginBottom: 30,
    marginLeft: 60,
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 30,
  },
  btnStyle: {
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: 250,
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {fontSize: 20, color: '#34B089'},
});
export default App;
