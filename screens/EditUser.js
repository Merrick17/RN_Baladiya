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
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet, Image} from 'react-native';
import {addNewUser, UpdateUser} from '../store/users/actions';
import {getToken} from '../helpers/tokenActions';
const EditUser = props => {
  const userId = props.navigation.getParam('id');

  let data = [];
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  state.clusterState.forEach(elm => {
    let cluster = {
      text: elm.name,
      value: elm._id,
    };
    data.push(cluster);
  });

  const [selectedIndex, setSelectedIndex] = useState(
    props.navigation.getParam('type'),
  );
  const [selectedOption, setSelectedOption] = useState(data[0]);
  const [name, setName] = useState(props.navigation.getParam('name'));
  const [firstName, setFirstName] = useState(
    props.navigation.getParam('firstname'),
  );
  const [authId, setAuthId] = useState(props.navigation.getParam('auth'));
  const [password, setPassword] = useState('');
  const [nbrhours, setNbrHours] = useState('');
  const onCheckedChange = index => {
    setSelectedIndex(index);
  };
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
          placeholder="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <Input
          style={styles.input}
          placeholder="Auth ID"
          value={authId}
          onChangeText={text => setAuthId(text)}
        />
        <Input
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <Select
          data={data}
          selectedOption={selectedOption}
          onSelect={setSelectedOption}
        />
        <RadioGroup selectedIndex={selectedIndex} onChange={onCheckedChange}>
          <Radio style={styles.radio} text="Driver" />
          <Radio style={styles.radio} text="Agent" />
        </RadioGroup>
        <Button
          style={styles.btn}
          status="danger"
          textStyle={{fontSize: 20}}
          size={'large'}
          onPress={() => {
            let user = {
              UserRole: selectedIndex,
              name: name,
              first_name: firstName,
              auth_id: authId,
              password: password,
              cluster: selectedOption.value,
            };
            getToken().then(data => {
              let token = data;
              dispatch(
                UpdateUser(user, userId, props.navigation, JSON.parse(token)),
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

export default EditUser;

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
