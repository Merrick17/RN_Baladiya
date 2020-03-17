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
import {addNewTruck} from '../store/trucks/action';
import {getToken} from '../helpers/tokenActions';
const AddTruck = props => {
  const dispatch = useDispatch();
  let data = [];
  const state = useSelector(state => state);
  state.UsersState.forEach(elm => {
    if (elm.role == 0) {
      let driver = {
        text: elm.name + ' ' + elm.first_name,
        value: elm._id,
      };
      data.push(driver);
    }
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(data[0]);
  const [carberon, setCarberon] = useState('');
  const [capacity, setCapacity] = useState('');
  const [maxTime, setMaxTime] = useState('');
  const [maxTour, setMaxTour] = useState('');

  const onCheckedChange = index => {
    setSelectedIndex(index);
  };
  return (
    <Layout
      style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <Layout style={styles.login}>
        <Input
          style={styles.input}
          placeholder="Carberon"
          value={carberon}
          onChangeText={text => setCarberon(text)}
        />
        <Input
          style={styles.input}
          placeholder="Capacity "
          value={capacity}
          onChangeText={text => setCapacity(text)}
        />
        <Input
          style={styles.input}
          placeholder="Max Time "
          value={maxTime}
          onChangeText={text => setMaxTime(text)}
        />
        <Input
          style={styles.input}
          placeholder="Max Tour Time "
          value={maxTour}
          onChangeText={text => setMaxTour(text)}
        />
        <Select
          data={data}
          selectedOption={selectedOption}
          onSelect={setSelectedOption}
        />

        <Button
          style={styles.btn}
          status="danger"
          textStyle={{fontSize: 20}}
          size={'large'}
          onPress={() => {
            getToken().then(data => {
              let token = data;
              let truck = {
                Carberon: carberon,
                Capacity: Number(capacity),
                MaxTime: maxTime,
                MaxTourTime: maxTour,
                Driver: selectedOption.value,
              };
              dispatch(addNewTruck(truck, props.navigation, JSON.parse(token)));
            });
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

export default AddTruck;

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
