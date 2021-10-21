import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
const LayOut = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.Ovuong}></View>
      <View style={styles.Ovuong}>
        <View style={styles.o1}></View>
        <View style={styles.o1}></View>
        <View style={styles.o1}></View>
      </View>
      <View style={styles.Ovuong}></View>
    </View>
  );
};
export default LayOut;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  Ovuong: {
    flex: 1,
    backgroundColor: 'red',
    borderWidth: 1,
  },
  o1: {
    flex: 1,
    backgroundColor: 'yellow',
    borderWidth: 1,
  },
});
