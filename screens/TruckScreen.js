import {Layout, Button, Icon} from '@ui-kitten/components';
import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import TruckCard from '../components/truckCard/index';
import {useSelector} from 'react-redux';
const addIcon = style => <Icon name="plus" />;
const TruckScreen = props => {
  const state = useSelector(state => state);
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
          props.navigation.navigate('AddTruck');
        }}>
        Add A New Truck
      </Button>

      <FlatList
        style={{width: '100%', alignSelf: 'center', paddingLeft: 25}}
        data={state.TruckState}
        renderItem={({item}) => {
          return (
            <TruckCard
              carb={item.Carberon}
              capacity={item.Capacity}
              MaxTime={item.MaxTime}
              maxTourTime={item.MaxTourTime}
              driver={item.User.name + '' + item.User.first_name}
              id={item._id}
            />
          );
        }}
        keyExtractor={item => item._id}
      />
    </Layout>
  );
};

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
