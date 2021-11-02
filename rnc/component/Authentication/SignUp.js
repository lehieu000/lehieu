import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import register from '../api/register';
const SignUp = () => {
  const {warper, inputStyle, bigBottom, bottomText} = styles;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const registerUse = () => {
    register(email, name, password).then(res => {
      console.log('res: ', res);
    });
  };
  return (
    <View style={warper}>
      <TextInput
        style={inputStyle}
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={inputStyle}
        placeholder="Enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={inputStyle}
        secureTextEntry
        placeholder="Enter your Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        style={inputStyle}
        secureTextEntry
        placeholder="Re-enter your email"
        value={rePassword}
        onChangeText={text => setRePassword(text)}
      />

      <TouchableOpacity style={bigBottom} onPress={registerUse}>
        <Text style={bottomText}>SIGN UP NOW</Text>
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
export default SignUp;
