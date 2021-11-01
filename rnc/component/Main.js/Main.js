import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './Shop/Home/Home';
import Header from './Shop/Header';
const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Home />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34B089',
  },
});
export default Main;
