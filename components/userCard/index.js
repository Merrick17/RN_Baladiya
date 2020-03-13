import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Btnstyles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

import {Text} from 'galio-framework';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, Layout, Button} from '@ui-kitten/components';
import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';
export default UserCard = props => {
  const [show, setShow] = useState(false);
  getActionSheetRef = ref => (actionSheet = ref);

  handlePress = index => {
    SetSelected(index);
  };
  return (
    <View style={Btnstyles.main}>
      <Image
        source={require('../../assets/cardicon/User.png')}
        style={styles.img}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Name </Text>
        <Text style={styles.txt}>Mehrez </Text>
        <Text style={styles.title}>First Name </Text>
        <Text style={styles.txt}>El Fathel </Text>
        <Text style={styles.title}>Role </Text>
        <Text style={styles.txt}> Driver</Text>
        <Text style={styles.title}>Auth ID</Text>
        <Text style={styles.txt}> Driver</Text>
      </View>
      <SCLAlert theme="info" show={show} title="" subtitle="" 
        headerContainerStyles={{ backgroundColor: '#698AC7',}}
     >
        <SCLAlertButton
          theme="info"
          onPress={() => {
            setShow(false);
          }}>
          Edit
        </SCLAlertButton>
        <SCLAlertButton
          theme="info"
          onPress={() => {
            setShow(false);
          }}>
          Delete
        </SCLAlertButton>
        <SCLAlertButton
          theme="danger"
          onPress={() => {
            setShow(false);
          }}>
          Cancel
        </SCLAlertButton>
      </SCLAlert>
      <Button
        style={styles.btn}
        onPress={() => {
          setShow(true);
        }}>
        Actions
      </Button>
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
    marginVertical: 3,
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
