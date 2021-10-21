import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const ConNguoi = ({hoten}) => {
  const [chieucao, setChieucao] = useState(0);

  return (
    <TouchableOpacity onPress={() => setChieucao(chieucao + 10)}>
      <SafeAreaView style={styles.container}>
        <Text>{hoten}</Text>
        <Text>{chieucao}</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
};
export default ConNguoi;
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
    margin: 20,
  },
});
