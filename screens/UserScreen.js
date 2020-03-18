import {Layout, Button, Modal} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import UserCard from '../components/userCard/index';
import {useSelector} from 'react-redux';

const UsersScreen = props => {
  const state = useSelector(state => state);
  //console.log(state.UsersState);
  return (
    <Layout
      style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <Button
        appearance={'outline'}
        style={styles.btn}
        status="primary"
        textStyle={{fontSize: 20}}
        size={'large'}
        onPress={() => {
          props.navigation.navigate('AddUser');
        }}>
        Add A New User
      </Button>
      <FlatList
        style={{width: '100%', alignSelf: 'center', paddingLeft: 25}}
        data={state.UsersState}
        renderItem={({item}) => {
          return (
            <UserCard
              name={item.name}
              firstName={item.first_name}
              auth={item.auth_id}
              type={item.role}
              id={item._id}
              navigator={props.navigation}
            />
          );
        }}
        keyExtractor={item => item._id}
      />
    </Layout>
  );
};

export default UsersScreen;

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
    width: '90%',
  },
});
