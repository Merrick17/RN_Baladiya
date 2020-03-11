import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Btnstyles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
//import {Button} from 'react-native-elements';
import {Text} from 'galio-framework';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, Layout,Button} from '@ui-kitten/components';
export default UserCard = props => {
  return (
    <View style={Btnstyles.main}>
    <Image
      source={require('../../assets/man.png')}
      style={styles.img}
    />
    <Text style={styles.txt}>-Name: TEST </Text>
    <Text style={styles.txt}>-Last Name: TEST </Text>
    <Text style={styles.txt}>-Auth Id: TEST </Text>
    <Text style={styles.txt}>-Role:TEST </Text>
    <Button style={styles.btn}>Actions</Button>
  </View>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 70,
    width: 70,
    alignSelf: 'flex-start',
    marginLeft: 150,
    marginTop: 10,
  },

  txt: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    width: '90%',
    //marginLeft:10,
    alignSelf:'center'
  },
});
