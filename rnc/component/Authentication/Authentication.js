import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
const Authentication = ({navigation}) => {
  const onBack = () => {
    navigation.goBack();
    navigation.openDrawer();
  };

  const [nameScreen, setNameScreen] = useState('SIGN_IN');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row1}>
        <TouchableOpacity onPress={onBack}>
          <Image
            source={require('../../../source/images-master/appIcon/back_white.png')}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <Text style={styles.titleStyle}>Wearing a Dress</Text>
        <Image
          source={require('../../../source/images-master/appIcon/ic_logo.png')}
          style={styles.iconStyle}
        />
      </View>
      {nameScreen === 'SIGN_IN' ? (
        <SignIn />
      ) : (
        <SignUp setNameScreen={setNameScreen} />
      )}
      <View style={styles.controlStyle}>
        <TouchableOpacity
          style={styles.sigInStyle}
          onPress={() => setNameScreen('SIGN_IN')}>
          <Text
            style={[
              styles.activeStyle,
              {color: nameScreen === 'SIGN_IN' ? '#34B089' : '#D7D7D7'},
            ]}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpStyle}
          onPress={() => setNameScreen('SIGN_UP')}>
          <Text
            style={[
              styles.inactiveStyle,
              {color: nameScreen === 'SIGN_UP' ? '#34B089' : '#D7D7D7'},
            ]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089',
    padding: 20,
    justifyContent: 'space-between',
  },
  row1: {flexDirection: 'row', justifyContent: 'space-between'},
  titleStyle: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontSize: 30,
    margin: 10,
  },
  iconStyle: {width: 30, height: 30, margin: 10},
  controlStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  inactiveStyle: {
    color: '#D7D7D7',
    fontSize: 20,
  },
  activeStyle: {
    color: '#34B089',
    fontSize: 20,
  },
  sigInStyle: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    marginLeft: 40,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 1,
  },
  signUpStyle: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    marginRight: 25,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 1,
  },
});
export default Authentication;
