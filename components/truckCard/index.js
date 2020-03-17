import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Btnstyles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {getToken} from '../../helpers/tokenActions';
import {Text} from 'galio-framework';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, Layout, Button} from '@ui-kitten/components';
import { deleteTruckData } from '../../store/trucks/action';
export default TruckCard = props => {
  const [show, setShow] = useState(false);
  return (
    <View style={Btnstyles.main}>
      <Image
        source={require('../../assets/cardicon/Truck.png')}
        style={styles.img}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Carberon </Text>
        <Text style={styles.txt}>{props.carb} </Text>
        <Text style={styles.title}>Capacity </Text>
        <Text style={styles.txt}>{props.capacity} </Text>
        <Text style={styles.title}>Max Time </Text>
        <Text style={styles.txt}>{props.MaxTime} </Text>
        <Text style={styles.title}>Max Tour Time </Text>
        <Text style={styles.txt}>{props.maxTourTime} </Text>
        <Text style={styles.title}>Driver </Text>
        <Text style={styles.txt}>{props.driver}</Text>
      </View>
      <SCLAlert
        theme="info"
        show={show}
        title=""
        subtitle=""
        headerContainerStyles={{backgroundColor: '#698AC7'}}
        onRequestClose={() => {}}>
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
            getToken().then(data => {
              let token = data;

              dispatch(deleteTruckData(props.id, JSON.parse(token)));
            });

            //

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
