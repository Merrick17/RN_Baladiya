import {Layout, Button, Icon} from '@ui-kitten/components';
import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import CustomCard from '../components/customCard/index';
import {useSelector} from 'react-redux';
const addIcon = style => <Icon name="plus" />;
const BinsScreen = props => {
  const state = useSelector(state => state);
  console.log(state.BinState);
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
          props.navigation.navigate('AddBin');
        }}>
        Add A New Bin
      </Button>
      <FlatList
        style={{width: '100%', alignSelf: 'center', paddingLeft: 25}}
        data={state.BinState}
        renderItem={({item}) => {
          console.log(item);
          return (
            <CustomCard
              Time={item.serviceTime}
              Cluster={item.Cluster.name}
              type={item.type}
              id={item.id}
              number={item.NumberInposition}
              type={item.type}
            />
          );
        }}
        keyExtractor={item => item._id}
      />
    </Layout>
  );
};

export default BinsScreen;

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
