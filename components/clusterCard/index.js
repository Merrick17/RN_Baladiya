import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Btnstyles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

import {Text} from 'galio-framework';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, Layout, Button} from '@ui-kitten/components';
export default ClusterCard = props => {
  return (
    <View style={Btnstyles.main}>
      <Image
        source={require('../../assets/cardicon/Location.png')}
        style={styles.img}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Name </Text>
        <Text style={styles.txt}>TEST </Text>
        <Text style={styles.title}>Total Bins Number</Text>
        <Text style={styles.txt}>Test </Text>
      </View>

      <Button style={styles.btn}>Actions</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    //marginLeft: 150,
    marginTop: -30,
  },
  content: {
    marginLeft: 25,
  },
  title: {
    //marginLeft: 5,
    fontSize: 18,
    marginVertical:3
    //fontWeight: 'bold',
  },
  txt: {
    //marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    width: '90%',
    //marginLeft:10,
    alignSelf: 'center',
    
  },
});
