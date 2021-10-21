import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TopProduct from './TopProduct';
import Collection from './Collection';
import Category from './Category';

const Home = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <Collection />
      <Category />
      <TopProduct />
    </ScrollView>
  );
};
export default Home;
const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#EEEEEE'},
});
