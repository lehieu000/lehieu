import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App1 = () => {
  const save = async () => {
    try {
      await AsyncStorage.setItem('@AAA:key', 'FAST & FURIOUS 8');
      console.log('SAVE');
    } catch (error) {
      console.log(error);
    }
  };
  const get = async () => {
    try {
      let a = await AsyncStorage.getItem('@AAA:key');
      console.log(a);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={save}>
        <Text style={styles.text}>SAVE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={get}>
        <Text style={styles.text}>GET</Text>
      </TouchableOpacity>
    </View>
  );
};
export default App1;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'yellow',
  },
  button: {
    borderWidth: 1,
    borderColor: 'yellow',
    width: 200,
    padding: 30,
    marginBottom: 20,
  },
});
