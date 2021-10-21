import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
function ManHinhB({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>B</Text>
      <Text style={styles.resultText}>{route.params.id}</Text>
      <Button
        title="Go to C"
        onPress={() => navigation.navigate('man hinh C')}
      />
    </View>
  );
}
export default ManHinhB;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  resultText: {
    fontSize: 100,
    color: 'white',
  },
});
