import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Sp1 from '../../../../../source/images-master/temp/sp1.jpeg';
import Sp2 from '../../../../../source/images-master/temp/sp2.jpeg';
import Sp3 from '../../../../../source/images-master/temp/sp3.jpeg';
import Sp4 from '../../../../../source/images-master/temp/sp4.jpeg';
const TopProduct = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TOP PRODUCT</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.productContainer}
          elevation={5}
          onPress={() => navigation.navigate('ProductDetail')}>
          <Image source={Sp1} style={styles.productImage} />
          <Text style={styles.produceName}>PRODUCT NAME</Text>
          <Text style={styles.producePrice}>400$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.productContainer}
          onPress={() => navigation.navigate('ProductDetail')}>
          <Image source={Sp2} style={styles.productImage} />
          <Text style={styles.produceName}>PRODUCT NAME</Text>
          <Text style={styles.producePrice}>300$</Text>
        </TouchableOpacity>
        <View style={{height: 10, width}} />
        <TouchableOpacity
          style={styles.productContainer}
          onPress={() => navigation.navigate('ProductDetail')}>
          <Image source={Sp3} style={styles.productImage} />
          <Text style={styles.produceName}>PRODUCT NAME</Text>
          <Text style={styles.producePrice}>400$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.productContainer}
          onPress={() => navigation.navigate('ProductDetail')}>
          <Image source={Sp4} style={styles.productImage} />
          <Text style={styles.produceName}>PRODUCT NAME</Text>
          <Text style={styles.producePrice}>300$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.productContainer}
          onPress={() => navigation.navigate('ProductDetail')}>
          <Image
            source={require('../../../../../source/images-master/temp/sp5.jpeg')}
            style={styles.productImage}
          />
          <Text style={styles.produceName}>PRODUCT NAME</Text>
          <Text style={styles.producePrice}>300$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.productContainer}
          onPress={() => navigation.navigate('ProductDetail')}>
          <Image source={Sp1} style={styles.productImage} />
          <Text style={styles.produceName}>PRODUCT NAME</Text>
          <Text style={styles.producePrice}>400$</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {height, width} = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productImageHeight = (productWidth / 361) * 452;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
    color: '#AFAEAF',
    fontSize: 20,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  productContainer: {
    width: productWidth,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  productImage: {
    width: productWidth,
    height: productImageHeight,
  },
  produceName: {
    marginVertical: 5,
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#AFAEAF',
    fontWeight: '400',
  },
  producePrice: {
    marginBottom: 5,
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#FF3333',
  },
});

export default TopProduct;
