import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
const ChangeInfo = ({navigation}) => {
  const onGoback = () => {
    navigation.goBack();
    navigation.openDrawer();
  };
  const {
    wrapper,
    header,
    headerTitle,
    backIconStyle,
    body,
    signInContainer,
    signInTextStyle,
    textInput,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={header}>
        <View />
        <Text style={headerTitle}>User Information</Text>
        <TouchableOpacity onPress={onGoback}>
          <Image
            source={require('../../../source/images-master/appIcon/backs.png')}
            style={backIconStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={body}>
        <TextInput style={textInput} placeholder="Enter your name" />
        <TextInput style={textInput} placeholder="Enter your address" />
        <TextInput style={textInput} placeholder="Enter your phone number" />
        <TouchableOpacity style={signInContainer}>
          <Text style={signInTextStyle}>CHANGE YOUR INFORMATION</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#fff'},
  header: {
    flex: 1,
    backgroundColor: '#2ABB9C',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headerTitle: {fontFamily: 'Avenir', color: '#fff', fontSize: 20},
  backIconStyle: {width: 30, height: 30},
  body: {flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center'},
  textInput: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Avenir',
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: '#2ABB9C',
    borderWidth: 1,
  },
  signInTextStyle: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontWeight: '600',
    paddingHorizontal: 20,
  },
  signInContainer: {
    marginHorizontal: 20,
    backgroundColor: '#2ABB9C',
    borderRadius: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  signInStyle: {
    flex: 3,
    marginTop: 50,
  },
});
export default ChangeInfo;
