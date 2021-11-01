import React from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
const {height, width} = Dimensions.get('window');
const Collection = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>SPRING COLLECTION</Text>
      </View>
      <View style={styles.titleStyle}>
        <Image
          source={require('../../../../../source/images-master/temp/banner.jpg')}
          style={styles.imageStyle}
        />
      </View>
    </View>
  );
};
export default Collection;
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;
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
  textStyle: {fontSize: 20, color: '#AFAEAF', paddingTop: 10},
  titleStyle: {flex: 4},
  imageStyle: {height: imageHeight, width: imageWidth},
  viewStyle: {flex: 1},
});
