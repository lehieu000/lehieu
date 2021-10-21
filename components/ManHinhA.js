import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function ManHinhA({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>A</Text>
      <Button
        title="Go to B"
        onPress={() =>
          navigation.navigate('man hinh B', {
            id: 100,
          })
        }
      />
    </View>
  );
}
export default ManHinhA;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  resultText: {
    fontSize: 100,
    color: 'white',
  },
});
