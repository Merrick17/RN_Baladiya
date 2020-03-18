import {
  Icon,
  Input,
  Layout,
  Button,
  RadioGroup,
  Radio,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {addNewCluster, UpdateCluster} from '../store/clusters/actions';
import {useDispatch, useSelector} from 'react-redux';
import {getToken} from '../helpers/tokenActions';
const EditCluster = props => {
  const clusterId = props.navigation.getParam('id');
  //console.log('Cluser ID', props.navigation.getParam('id'));
  const [name, setName] = useState(props.navigation.getParam('name'));
  const [nbr, setNbr] = useState(props.navigation.getParam('nbr'));
  const dispatch = useDispatch();
  return (
    <Layout
      style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <Layout style={styles.login}>
        <Input
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Input
          style={styles.input}
          placeholder="Total Bin Number"
          value={nbr.toString()}
          onChangeText={text => setNbr(Number(text))}
        />

        <Button
          style={styles.btn}
          status="danger"
          textStyle={{fontSize: 20}}
          size={'large'}
          onPress={() => {
            getToken().then(data => {
              let token = data;

              let cluster = {
                name: name,
                nbrBin: nbr,
              };
              dispatch(
                UpdateCluster(
                  cluster,
                  clusterId,
                  props.navigation,
                  JSON.parse(token),
                ),
              );
            });
          }}>
          Edit
        </Button>
        <Button
          style={styles.btn}
          status="success"
          textStyle={{fontSize: 20}}
          size={'large'}
          onPress={() => {
            props.navigation.navigate('Main');
          }}>
          Cancel
        </Button>
      </Layout>
    </Layout>
  );
};

export default EditCluster;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 5,
    marginVertical: 5,
    width: '90%',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 25,
  },
  login: {
    marginTop: 30,
  },
  btn: {
    marginTop: 25,
    fontSize: 24,
  },
});
