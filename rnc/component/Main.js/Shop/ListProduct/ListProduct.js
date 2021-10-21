import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Header from '../Header';
import {useNavigation} from '@react-navigation/native';

const ListProduct = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Header />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../../../../source/images-master/appIcon/backList.png')}
                style={styles.backStyle}
              />
            </TouchableOpacity>
            <Text style={styles.titleStyle}>Party Dress</Text>
            <View style={{width: 30}} />
          </View>
          <View style={styles.productContainer}>
            <Image
              source={require('../../../../../source/images-master/temp/sp1.jpeg')}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.txtName}>Lace Sleeve Si</Text>
              <Text style={styles.txtPrice}>117$</Text>
              <Text style={styles.txtMaterial}>Material Silk</Text>
              <View style={styles.lastShowInfo}>
                <Text style={styles.txtColor}>Color RoyalBlue</Text>
                <View style={styles.iconStyle} />
                <TouchableOpacity>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image
              source={require('../../../../../source/images-master/temp/sp2.jpeg')}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.txtName}>Lace Sleeve Si</Text>
              <Text style={styles.txtPrice}>117$</Text>
              <Text style={styles.txtMaterial}>Material Silk</Text>
              <View style={styles.lastShowInfo}>
                <Text style={styles.txtColor}>Color RoyalBlue</Text>
                <View style={styles.iconStyle} />
                <TouchableOpacity>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image
              source={require('../../../../../source/images-master/temp/sp3.jpeg')}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.txtName}>Lace Sleeve Si</Text>
              <Text style={styles.txtPrice}>117$</Text>
              <Text style={styles.txtMaterial}>Material Silk</Text>
              <View style={styles.lastShowInfo}>
                <Text style={styles.txtColor}>Color RoyalBlue</Text>
                <View style={styles.iconStyle} />
                <TouchableOpacity>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image
              source={require('../../../../../source/images-master/temp/sp4.jpeg')}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.txtName}>Lace Sleeve Si</Text>
              <Text style={styles.txtPrice}>117$</Text>
              <Text style={styles.txtMaterial}>Material Silk</Text>
              <View style={styles.lastShowInfo}>
                <Text style={styles.txtColor}>Color RoyalBlue</Text>
                <View style={styles.iconStyle} />
                <TouchableOpacity>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image
              source={require('../../../../../source/images-master/temp/sp5.jpeg')}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.txtName}>Lace Sleeve Si</Text>
              <Text style={styles.txtPrice}>117$</Text>
              <Text style={styles.txtMaterial}>Material Silk</Text>
              <View style={styles.lastShowInfo}>
                <Text style={styles.txtColor}>Color RoyalBlue</Text>
                <View style={styles.iconStyle} />
                <TouchableOpacity>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image
              source={require('../../../../../source/images-master/temp/sp1.jpeg')}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.txtName}>Lace Sleeve Si</Text>
              <Text style={styles.txtPrice}>117$</Text>
              <Text style={styles.txtMaterial}>Material Silk</Text>
              <View style={styles.lastShowInfo}>
                <Text style={styles.txtColor}>Color RoyalBlue</Text>
                <View style={styles.iconStyle} />
                <TouchableOpacity>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {flex: 1, backgroundColor: '#34B089'},
  container: {
    flex: 1,
    backgroundColor: '#DBDBD8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: '#fff',
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    margin: 10,
    paddingHorizontal: 5,
  },
  backStyle: {
    width: 30,
    height: 30,
  },
  titleStyle: {
    fontFamily: 'Avenir',
    color: '#B10D65',
    fontSize: 20,
  },
  productContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderTopColor: '#F0F0F0',
    borderLeftColor: '#FFF',
    borderRightColor: '#FFF',
    borderBottomColor: '#FFF',
    borderWidth: 1,
  },
  productInfo: {
    justifyContent: 'space-between',
    marginLeft: 15,
    flex: 1,
  },
  productImage: {
    width: 120,
    height: (120 * 452) / 361,
  },
  lastShowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtName: {
    fontFamily: 'Avenir',
    color: '#BCBCBC',
    fontSize: 20,
    fontWeight: '500',
  },
  txtPrice: {
    fontFamily: 'Avenir',
    color: '#B10D65',
  },
  txtMaterial: {fontFamily: 'Avenir'},
  txtColor: {fontFamily: 'Avenir'},
  txtShowDetail: {fontFamily: 'Avenir', color: '#B10D65', fontSize: 11},
  iconStyle: {
    backgroundColor: 'cyan',
    height: 16,
    width: 16,
    borderRadius: 8,
  },
});
export default ListProduct;
