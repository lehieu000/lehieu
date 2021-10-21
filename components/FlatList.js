import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

const FlatListO = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    initData();
  }, []);

  const initData = () => {
    setRefreshing(true);
    fetch('http://localhost/WebService01/vd1.php?trang=0')
      .then(reponse => reponse.json())
      .then(reponseJson => {
        console.log(reponseJson);
        setData(reponseJson);
        setRefreshing(false);
      })
      .catch(error => {
        setRefreshing(false);
        console.log(error);
      });
  };
  const onRefresh = () => {
    setRefreshing(true);
    setIndex(index + 1);
    fetch(`http://localhost/WebService01/vd1.php?trang=${index}`)
      .then(reponse => reponse.json())
      .then(reponseJson => {
        console.log(reponseJson);
        setData(reponseJson);
        setRefreshing(false);
      })
      .catch(error => {
        setRefreshing(false);
        console.log(error);
      });
  };
  return (
    <FlatList
      onRefresh={onRefresh}
      data={data}
      refreshing={refreshing}
      renderItem={({item}) => (
        <View style={{padding: 40, borderWidth: 1}}>
          <Image source={{uri: item.Anh}} style={{width: 100, height: 100}} />
          <Text>{item.Id}</Text>
        </View>
      )}
    />
  );
};
export default FlatListO;
