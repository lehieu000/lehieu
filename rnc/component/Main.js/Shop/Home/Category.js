import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');
const url = 'http://localhost/api/images/type/';
const Category = ({data}) => {
  const navigation = useNavigation();
  const {wrapper, textStyle, imageStyle, cateTitle, viewStyle, viewSwiper} =
    styles;
  return (
    <View style={wrapper}>
      <View style={viewStyle}>
        <Text style={textStyle}>LIST OF CATEGORY</Text>
      </View>
      <View style={viewSwiper}>
        <Swiper width={imageWidth}>
          {data?.type?.map(e => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ListProduct', {product: data?.product})
              }
              key={e?.id}>
              <ImageBackground
                source={{
                  uri: `${url}${e?.image}`,
                }}
                style={imageStyle}>
                <Text style={cateTitle}>{e?.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </Swiper>
      </View>
    </View>
  );
};
export default Category;
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.28,
    backgroundColor: 'white',
    margin: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  textStyle: {fontSize: 20, color: '#AFAEAF'},
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cateTitle: {
    fontSize: 20,
    fontFamily: 'Avenir',
    color: '#9A9A9A',
  },
  viewStyle: {flex: 1, justifyContent: 'center'},
  viewSwiper: {flex: 4},
});
