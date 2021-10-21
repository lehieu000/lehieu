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
import LittleIcon from '../../../../../source/images-master/temp/little.jpg';
import MaxiIcon from '../../../../../source/images-master/temp/maxi.jpg';
import PartyIcon from '../../../../../source/images-master/temp/party.jpg';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');
const Category = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
      </View>
      <View style={{flex: 4}}>
        <Swiper width={imageWidth}>
          <TouchableOpacity onPress={() => navigation.navigate('ListProduct')}>
            <ImageBackground source={LittleIcon} style={styles.imageStyle}>
              <Text style={styles.cateTitle}>Maxi Dress</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ListProduct')}>
            <ImageBackground
              source={MaxiIcon}
              resizeMode="cover"
              style={styles.imageStyle}>
              <Text style={styles.cateTitle}>Maxi Dress</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ListProduct')}>
            <ImageBackground source={PartyIcon} style={styles.imageStyle}>
              <Text style={styles.cateTitle}>Maxi Dress</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ListProduct')}>
            <ImageBackground
              source={require('../../../../../source/images-master/temp/midi.jpg')}
              style={styles.imageStyle}>
              <Text style={styles.cateTitle}>Maxi Dress</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ListProduct')}>
            <ImageBackground
              source={require('../../../../../source/images-master/temp/fit.jpg')}
              style={styles.imageStyle}>
              <Text style={styles.cateTitle}>Maxi Dress</Text>
            </ImageBackground>
          </TouchableOpacity>
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
});
