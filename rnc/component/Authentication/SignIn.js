import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
const SignIn = () => {
  const {warper, inputStyle, bigBottom, bottomText} = styles;
  return (
    <View style={warper}>
      <TextInput style={inputStyle} placeholder="Enter your email" />
      <TextInput style={inputStyle} placeholder="Enter your Password" />
      <TouchableOpacity style={bigBottom}>
        <Text style={bottomText}>SIGN IN NOW</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  warper: {margin: 20},
  inputStyle: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 10,
  },
  bigBottom: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  bottomText: {
    fontFamily: 'Avenir',
    color: '#fff',
  },
});
export default SignIn;
