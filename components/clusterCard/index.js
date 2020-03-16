import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Btnstyles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';
import {Text} from 'galio-framework';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, Layout, Button} from '@ui-kitten/components';
import {deleteClusterData} from '.././../store/clusters/actions';
import {useDispatch, useSelector} from 'react-redux';
import {getToken} from '../../helpers/tokenActions';
export default ClusterCard = props => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const state = useState(state => state);

  return (
    <View style={Btnstyles.main}>
      <Image
        source={require('../../assets/cardicon/Location.png')}
        style={styles.img}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Name </Text>
        <Text style={styles.txt}>{props.name}</Text>
        <Text style={styles.title}>Total Bins Number</Text>
        <Text style={styles.txt}>{props.totalBin}</Text>
      </View>
      <SCLAlert
        theme="info"
        show={show}
        title=""
        subtitle=""
        headerContainerStyles={{backgroundColor: '#698AC7'}}
        onRequestClose={() => {
          console.log('closed');
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
              console.log('Daaaataaa', data);
              let token = data;
              console.log('retireve token', );
              dispatch(deleteClusterData(props.id,JSON.parse(token)));
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
        appearance={'outline'}
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
    marginTop: 3,
    //marginLeft:10,
    alignSelf: 'center',
  },
});
