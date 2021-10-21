import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Menu = () => {
  const [HOTEN, setHoten] = useState('');
  const [USERNAME, setUsername] = useState('');
  const [PASSWORD, setPassword] = useState('');
  const [result, setResult] = useState('...');
  const clickPlus = () => {
    fetch('http://localhost/DemoLive/dangKy.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        HOTEN: HOTEN,
        USERNAME: USERNAME,
        PASSWORD: PASSWORD,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        setResult(responseJson.id);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={setHoten}
        value={HOTEN}
        placeholder="hoten"
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={setUsername}
        value={USERNAME}
        placeholder="username"
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={setPassword}
        value={PASSWORD}
        placeholder="password"
      />
      <TouchableOpacity style={styles.plus} onPress={clickPlus}>
        <Text style={styles.plusText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.result}>
        <Text>{result}</Text>
      </View>
    </SafeAreaView>
  );
};
export default Menu;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  plus: {
    padding: 20,
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    color: 'white',
  },
  result: {
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
