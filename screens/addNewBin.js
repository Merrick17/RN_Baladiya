import {
  Icon,
  Input,
  Layout,
  Button,
  RadioGroup,
  Radio,
  Select,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getToken} from '../helpers/tokenActions';
import {addNewBin} from '../store/bin/actions';
const AddBin = props => {
  const dispatch = useDispatch();
  let data = [];
  const state = useSelector(state => state);
  state.clusterState.forEach(elm => {
    let cluster = {
      text: elm.name,
      value: elm._id,
    };
    data.push(cluster);
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(data[0]);
  const [service, setService] = useState('');
  const [nbr, setNumber] = useState('');
  const [lat, setlat] = useState('');
  const [lng, setLng] = useState('');
  const onCheckedChange = index => {
    setSelectedIndex(index);
  };
  return (
    <Layout
      style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <Layout style={styles.login}>
        <Input
          style={styles.input}
          placeholder="Service Time"
          value={service}
          onChangeText={text => setService(text)}
        />
        <Input
          style={styles.input}
          placeholder="Nbr In Position "
          value={nbr.toString()}
          onChangeText={text => setNumber(text)}
        />
        <Input
          style={styles.input}
          placeholder="longitude "
          value={lng.toString()}
          onChangeText={text => setLng(text)}
        />
        <Input
          style={styles.input}
          placeholder="latitude"
          value={lat.toString()}
          onChangeText={text => setlat(text)}
        />
        <Select
          data={data}
          selectedOption={selectedOption}
          onSelect={setSelectedOption}
        />
        <RadioGroup selectedIndex={selectedIndex} onChange={onCheckedChange}>
          <Radio style={styles.radio} text="Plastic" />
          <Radio style={styles.radio} text="Metallic" />
        </RadioGroup>
        <Button
          style={styles.btn}
          status="danger"
          textStyle={{fontSize: 20}}
          size={'large'}
          onPress={() => {
            getToken().then(data => {
              let token = data;

              let bin = {
                type: selectedIndex,
                serviceTime: Number(service),
                nbrInposition: Number(nbr),
                clusterid: selectedOption.value,
                lat: Number(lat),
                lng: Number(lng),
              };

              dispatch(addNewBin(bin, props.navigation, JSON.parse(token)));
            });

            //props.navigation.navigate('Main');
          }}>
          Add
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

export default AddBin;

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
