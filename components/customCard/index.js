import React,{useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Btnstyles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';
import {Text} from 'galio-framework';
import {deleteBinData} from '../../store/bin/actions';
import {Avatar, Layout, Button} from '@ui-kitten/components';
import {getToken} from '../../helpers/tokenActions';
import {useDispatch} from 'react-redux';
export default CustomCard = props => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  return (
    <View style={Btnstyles.main}>
      <Image
        source={require('../../assets/cardicon/Bin.png')}
        style={styles.img}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Service Time </Text>
        <Text style={styles.txt}>{props.Time}</Text>
        <Text style={styles.title}>Type </Text>
        <Text style={styles.txt}>{props.type == 0 ? 'Plastic' : 'Metal'}</Text>
        <Text style={styles.title}>Number in position </Text>
        <Text style={styles.txt}>{props.number}</Text>
        <Text style={styles.title}>Cluster</Text>
        <Text style={styles.txt}>{props.Cluster}</Text>
      </View>
      <SCLAlert
        theme="info"
        show={show}
        title=""
        subtitle=""
        headerContainerStyles={{backgroundColor: '#698AC7'}}
        onRequestClose={() => {
        
        }}>
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
             
              dispatch(deleteBinData(props.id, JSON.parse(token)));
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
