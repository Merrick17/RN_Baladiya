import {Layout, Button, Icon} from '@ui-kitten/components';
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import TruckCard from '../components/truckCard/index';
const addIcon = style => <Icon name="plus" />;
const TruckScreen = props => (
  <Layout style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
    <Button
      appearance={'outline'}
      style={styles.btn}
      status="primary"
      textStyle={{fontSize: 20}}
      size={'large'}
      onPress={() => {
        //props.navigation.navigate('Main');
      }}>
      Add A New Truck
    </Button>
    <TruckCard />
  </Layout>
);

export default TruckScreen;

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
