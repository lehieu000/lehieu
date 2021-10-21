import React from 'react';
import {Text, SafeAreaView, Button, StyleSheet} from 'react-native';
const SignOut = ({navigation}) => {
  const onGoback = () => {
    navigation.goBack();
    navigation.openDrawer();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>SignOut component</Text>
      <Button title={'go back to Main'} onPress={onGoback} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
export default SignOut;
