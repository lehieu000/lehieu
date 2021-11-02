import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import signIn from '../api/signIn';
const SignIn = () => {
  const {warper, inputStyle, bigBottom, bottomText} = styles;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSignIn = () => {
    signIn(email, password)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <View style={warper}>
      <TextInput
        style={inputStyle}
        placeholder="Enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={inputStyle}
        placeholder="Enter your Password"
        value={password}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={bigBottom} onPress={onSignIn()}>
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
