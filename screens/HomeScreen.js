import {Icon, Input, Layout, Button} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {asyncloginUser} from '../store/loggedIn/actions';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
const HomeScreen = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  [authId, setAuthID] = useState('');
  [password, setPassword] = useState('');
  return (
    <Layout
      style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <Layout style={styles.login}>
        <Spinner
          visible={state.spinnerState}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <Image source={require('../assets/recycle.png')} style={styles.logo} />
        <Input
          style={styles.input}
          placeholder="Auth ID"
          value={authId}
          onChangeText={text => {
            setAuthID(text);
          }}
        />
        <Input
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          //value={value}
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <Button
          style={styles.btn}
          status="danger"
          textStyle={{fontSize: 20}}
          size={'large'}
          onPress={() => {
            let user = {
              auth_id: authId,
              password: password,
            };
            //props.navigation.navigate('Main');
            dispatch(asyncloginUser(user, props.navigation));
          }}>
          Sign in{' '}
        </Button>
      </Layout>
    </Layout>
  );
};

export default HomeScreen;

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
  spinnerTextStyle: {
    color: '#FFF',
  },
});
