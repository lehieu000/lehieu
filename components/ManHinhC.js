import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
function ManHinhC({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>C</Text>
      <Button title="Go back" onPress={() => navigation.pop(2)} />
    </View>
  );
}
export default ManHinhC;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  resultText: {
    fontSize: 100,
    color: 'white',
  },
});
