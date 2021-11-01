import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Header from '../Header';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const back = require('../../../../../source/images-master/appIcon/back.png');
const cart = require('../../../../../source/images-master/appIcon/cartfull.png');
const url = 'http://localhost/api/images/product/';

const ProductDetail = ({route}) => {
  const navigation = useNavigation();

  const pushProductToCart = async product => {
    try {
      let temp = await AsyncStorage.getItem('my_cart');
      let myArray = JSON.parse(temp);
      if (!myArray?.length) {
        myArray = [{quantity: 1, data: product}];
      } else {
        const result = myArray?.filter(item => item.data.id === product.id);
        if (result.length === 0) {
          myArray = [...myArray, {quantity: 1, data: product}];
        } else {
          console.log('result', result);
          const res = myArray.findIndex(item => item.data.id === product.id);
          myArray[res].quantity = +result?.[0].quantity + 1;
        }
      }
      await AsyncStorage.setItem('my_cart', JSON.stringify(myArray));
    } catch (error) {
      console.log('err: ', error);
    }
  };

  const {name, color, material, price, description, images} =
    route.params.product;
  const {
    wrapper,
    txtScrollView,
    cardStyle,
    header,
    footer,
    backStyle,
    imageContainer,
    cartStyle,
    textBlack,
    textSmoke,
    textHighlight,
    textMain,
    titleContainer,
    descContainer,
    productImageStyle,
    descStyle,
    txtMaterial,
    txtColor,
    viewColor,
  } = styles;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={wrapper}>
        <View style={cardStyle}>
          <View style={header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={backStyle} source={back} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pushProductToCart(route.params.product)}>
              <Image style={cartStyle} source={cart} />
            </TouchableOpacity>
          </View>
          <View style={imageContainer}>
            <ScrollView style={txtScrollView} horizontal>
              <Image
                source={{uri: `${url}${images?.[0]}`}}
                style={productImageStyle}
              />
              <Image
                source={{uri: `${url}${images?.[1]}`}}
                style={productImageStyle}
              />
            </ScrollView>
          </View>
          <View style={footer}>
            <View style={titleContainer}>
              <Text style={textMain}>
                <Text style={textBlack}>{name.toUpperCase()}</Text>
                <Text style={textHighlight}> / </Text>
                <Text style={textSmoke}>{price}$</Text>
              </Text>
            </View>
            <View style={descContainer}>
              <Text style={descStyle}>{description}</Text>
              <View style={styles.txtView}>
                <Text style={txtMaterial}>Material {material}</Text>
                <View style={viewColor}>
                  <Text style={txtColor}>Color {color}</Text>
                  <View
                    style={[
                      styles.txtView2,
                      {backgroundColor: color.toLowerCase()},
                    ]}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const {width} = Dimensions.get('window');
const swiperWidth = width / 1.8 - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089',
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#D6D6D6',
  },
  cardStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  cartStyle: {
    width: 25,
    height: 25,
  },
  backStyle: {
    width: 25,
    height: 25,
  },
  productStyle: {
    width: width / 2,
    height: width / 2,
  },
  footer: {
    flex: 6,
  },
  imageContainer: {
    flex: 6,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  textMain: {
    paddingLeft: 20,
    marginVertical: 10,
  },
  textBlack: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3F3F46',
  },
  textSmoke: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: '#9A9A9A',
  },
  textHighlight: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: '#7D59C8',
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: '#F6F6F6',
    marginHorizontal: 20,
    paddingBottom: 5,
  },
  descContainer: {
    margin: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  descStyle: {
    color: '#AFAFAF',
  },
  linkStyle: {
    color: '#7D59C8',
  },
  productImageStyle: {
    width: swiperWidth,
    height: swiperHeight,
    marginHorizontal: 5,
  },
  mainRight: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingLeft: 20,
  },
  txtColor: {
    color: '#C21C70',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtMaterial: {
    color: '#C21C70',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  txtView2: {
    height: 15,
    width: 15,
    borderRadius: 15,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#C21C70',
  },
  txtScrollView: {flexDirection: 'row', padding: 10, height: swiperHeight},
  viewColor: {flexDirection: 'row'},
});
export default ProductDetail;
