import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import Header from '../Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const url = 'http://localhost/api/images/product/';

const CartView = () => {
  const [cart, setCart] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    getCart();
  }, [isFocused]);

  const {
    main,
    checkoutButton,
    checkoutTitle,
    wrapper,
    product1,
    mainRight,
    productController,
    txtName,
    txtPrice,
    productImage,
    numberOfProduct,
    txtShowDetail,
    showDetailContainer,
  } = styles;

  const getCart = async () => {
    try {
      const myArray = await AsyncStorage.getItem('my_cart');
      setCart(JSON.parse(myArray));
    } catch (error) {
      console.log('err: ', error);
    }
  };
  const deleteProductFromCart = async productId => {
    const result = cart.filter(item => item.data.id !== productId);
    setCart(result);
    try {
      await AsyncStorage.setItem('my_cart', JSON.stringify(result));
    } catch (err) {
      console.log('err: ', err);
    }
  };

  return (
    <SafeAreaView style={wrapper}>
      <View>
        <Header />
      </View>
      <ScrollView style={main}>
        {cart?.map(item => {
          const product = item.data;
          const quantity = item.quantity;
          return (
            <View style={product1} key={product}>
              <Image
                source={{uri: `${url}${product?.images?.[0]}`}}
                style={productImage}
              />
              <View style={[mainRight]}>
                <View style={styles.viewName}>
                  <Text style={txtName}>{product?.name.toUpperCase()}</Text>
                  <TouchableOpacity
                    onPress={() => deleteProductFromCart(product.id)}>
                    <Text style={styles.txtDelete}>X</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={txtPrice}>{`${product?.price}$`}</Text>
                </View>
                <View style={productController}>
                  <View style={numberOfProduct}>
                    <TouchableOpacity>
                      <Text>+</Text>
                    </TouchableOpacity>
                    <Text>{quantity}</Text>
                    <TouchableOpacity>
                      <Text>-</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={showDetailContainer}>
                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity style={checkoutButton}>
        <Text style={checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const {width} = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#DFDFDF',
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: '#2ABB9C',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    width,
    backgroundColor: '#DFDFDF',
  },
  checkoutTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
  product1: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: 'center',
  },
  mainRight: {
    flex: 3,
    justifyContent: 'space-between',
  },
  productController: {
    flexDirection: 'row',
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtName: {
    paddingLeft: 20,
    color: '#A7A7A7',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtPrice: {
    paddingLeft: 20,
    color: '#C21C70',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtShowDetail: {
    color: '#C21C70',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'right',
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  viewName: {justifyContent: 'space-between', flexDirection: 'row'},
  txtDelete: {fontFamily: 'Avenir', color: '#969696'},
});
export default CartView;
