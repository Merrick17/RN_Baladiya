import {Layout, Button, Icon} from '@ui-kitten/components';
import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import ClusterCard from '../components/clusterCard/index';
import {useSelector} from 'react-redux';
const addIcon = style => <Icon name="plus" />;
const ClusterScreen = props => {
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
          props.navigation.navigate('AddCluster');
        }}>
        Add A New Cluster
      </Button>
      <FlatList style={{width:'100%',alignSelf:'center',paddingLeft:25}}
        data={state.clusterState}
        renderItem={({item}) => {
         
          return <ClusterCard name={item.name} totalBin={item.totalBinNmbr} id={item._id}/>;
        }}
        keyExtractor={item => item._id}
      />
    </Layout>
  );
};

export default ClusterScreen;

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
