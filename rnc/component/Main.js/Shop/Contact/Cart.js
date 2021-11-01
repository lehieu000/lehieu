import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import CartView from './CartView';

const Cart = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <CartView />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#34B089',
  },
});
export default Cart;
