import React from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
const OderHistory = ({navigation}) => {
  const onGoback = () => {
    navigation.goBack();
    navigation.openDrawer();
  };
  const {
    wrapper,
    header,
    headerTitle,
    backIconStyle,
    viewColor,
    body,
    orderRow,
    textColor,
    textStyle,
    timeStyle,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={header}>
        <View />
        <Text style={headerTitle}>Order History</Text>
        <TouchableOpacity onPress={onGoback}>
          <Image
            source={require('../../../source/images-master/appIcon/backs.png')}
            style={backIconStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={body}>
        <ScrollView>
          <View style={orderRow}>
            <View style={viewColor}>
              <Text style={textColor}>Order id:</Text>
              <Text style={textStyle}>ORD001</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>OrderTime:</Text>
              <Text style={textStyle}>2017-04-19 08:30:08</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>Status:</Text>
              <Text style={textStyle}>Pending</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>Total:</Text>
              <Text style={timeStyle}>100$</Text>
            </View>
          </View>

          <View style={orderRow}>
            <View style={viewColor}>
              <Text style={textColor}>Order id:</Text>
              <Text style={textStyle}>ORD001</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>OrderTime:</Text>
              <Text style={textStyle}>2017-04-19 08:30:08</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>Status:</Text>
              <Text style={textStyle}>Pending</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>Total:</Text>
              <Text style={timeStyle}>100$</Text>
            </View>
          </View>

          <View style={orderRow}>
            <View style={viewColor}>
              <Text style={textColor}>Order id:</Text>
              <Text style={textStyle}>ORD001</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>OrderTime:</Text>
              <Text style={textStyle}>2017-04-19 08:30:08</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>Status:</Text>
              <Text style={textStyle}>Pending</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>Total:</Text>
              <Text style={timeStyle}>100$</Text>
            </View>
          </View>
          <View style={orderRow}>
            <View style={viewColor}>
              <Text style={textColor}>Order id:</Text>
              <Text style={textStyle}>ORD001</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>OrderTime:</Text>
              <Text style={textStyle}>2017-04-19 08:30:08</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>Status:</Text>
              <Text style={textStyle}>Pending</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>Total:</Text>
              <Text style={timeStyle}>100$</Text>
            </View>
          </View>
          <View style={orderRow}>
            <View style={viewColor}>
              <Text style={textColor}>Order id:</Text>
              <Text style={textStyle}>ORD001</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>OrderTime:</Text>
              <Text style={textStyle}>2017-04-19 08:30:08</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>Status:</Text>
              <Text style={textStyle}>Pending</Text>
            </View>
            <View style={viewColor}>
              <Text style={textColor}>Total:</Text>
              <Text style={timeStyle}>100$</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const {width} = Dimensions.get('window');

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
  body: {flex: 10, backgroundColor: '#F6F6F6'},
  orderRow: {
    height: width / 3,
    backgroundColor: '#FFF',
    margin: 10,
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: 'space-around',
  },
  viewColor: {flexDirection: 'row', justifyContent: 'space-between'},
  textColor: {color: '#9A9A9A', fontWeight: 'bold'},
  textStyle: {color: '#C21C70'},
  timeStyle: {color: '#C21C70', fontWeight: 'bold'},
});

export default OderHistory;
