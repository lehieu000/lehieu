import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import Header from '../Header';
import {useNavigation} from '@react-navigation/native';

const ProductDetail = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <View>
        <Text>ProductDetail</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>BACK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#34B089'},
});
export default ProductDetail;
