import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View style={styles.row1}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../../../../source/images-master/appIcon/ic_menu.png')}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <Text style={styles.titleStyle}>Wearing a Dress</Text>
        <Image
          source={require('../../../../source/images-master/appIcon/ic_logo.png')}
          style={styles.iconStyle}
        />
      </View>
      <TextInput
        style={styles.TextInput}
        placeholder="What do you want to buy ?"
      />
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  wrapper: {
    height: height / 8,
    backgroundColor: '#34B089',
    padding: 10,
    justifyContent: 'space-around',
  },
  row1: {flexDirection: 'row', justifyContent: 'space-between'},
  TextInput: {height: height / 25, backgroundColor: 'white', paddingLeft: 15},
  titleStyle: {color: 'white', fontFamily: 'Avenir', fontSize: 25},
  iconStyle: {width: 30, height: 30},
});
