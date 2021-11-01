import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TopProduct from './TopProduct';
import Collection from './Collection';
import Category from './Category';

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {}, [data]);

  const getData = async () => {
    const res = await fetch('http://localhost/api/');
    const parseJson = await res.json();
    // console.log('parseJson: ', parseJson);
    setData(parseJson);
  };
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Collection />
      <Category data={data} />
      <TopProduct data={data} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Home;
