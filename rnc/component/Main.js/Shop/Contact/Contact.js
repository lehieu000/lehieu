import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Header from '../Header';

const Contact = () => {
  const {
    mapContainer,
    wrapper,
    infoContainer,
    rowInfoContainer,
    imageStyle,
    infoText,
  } = styles;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#34B089'}}>
      <View>
        <Header />
      </View>
      <View style={wrapper}>
        <View style={mapContainer}>
          <Image
            style={{flex: 1, alignSelf: 'stretch', width: undefined}}
            source={require('../../../../../source/images-master/appIcon/map.png')}
          />
        </View>
        <View style={infoContainer}>
          <View style={rowInfoContainer}>
            <Image
              source={require('../../../../../source/images-master/appIcon/phone.png')}
              style={imageStyle}
            />
            <Text style={infoText}>256 Xuan Dinh/ Ben Thanh Dist</Text>
          </View>
          <View style={rowInfoContainer}>
            <Image
              source={require('../../../../../source/images-master/appIcon/mail.png')}
              style={imageStyle}
            />
            <Text style={infoText}>(+84) 359099992</Text>
          </View>
          <View style={rowInfoContainer}>
            <Image
              source={require('../../../../../source/images-master/appIcon/message.png')}
              style={imageStyle}
            />
            <Text style={infoText}>lehieub3@gmail.com</Text>
          </View>
          <View style={[rowInfoContainer, {borderBottomWidth: 0}]}>
            <Image
              source={require('../../../../../source/images-master/appIcon/location.png')}
              style={imageStyle}
            />
            <Text style={infoText}>(+84) 359099992</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#F6F6F6'},
  mapStyle: {
    width: width - 40,
    height: 230,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  infoContainer: {
    padding: 10,
    flex: 1,
    backgroundColor: '#FFF',
    margin: 10,
    marginTop: 0,
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  rowInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D6D6D6',
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  infoText: {
    fontFamily: 'Avenir',
    color: '#AE005E',
    fontWeight: '500',
  },
});

export default Contact;
