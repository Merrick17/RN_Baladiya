import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Icon, Input, Layout, Button} from '@ui-kitten/components';
import BtnItem from '../components/BtnItem/index';
import TrashIcon from '../icons/trashIcon';
import ClusterIcon from '../icons/clusterIcon';
import userIcon from '../icons/personIcon';
import truckIcon from '../icons/truckIcon';
import {useDispatch, useSelector} from 'react-redux';
import {NavBar} from 'galio-framework';
import ExitIcon from '../icons/exitIcon';
import {PieChart} from 'react-native-chart-kit';

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};
const MainScreen = props => {
  const state = useSelector(state => state);
  const dispatcher = useDispatch();
  console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
  let currentData = [];
  state.clusterState.forEach(element => {
    let elm = {
      name: element.name,
      total: element.totalBinNmbr,
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    };
    currentData.push(elm);
  });
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <View style={{paddingHorizontal: 20}}>
        <PieChart
          data={currentData}
          width={Dimensions.get('window').width * 0.9}
          height={220}
          chartConfig={chartConfig}
          accessor="total"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
      <BtnItem
        icon={TrashIcon}
        title={'Manage Bins'}
        action={() => {
          props.navigation.navigate('BinScreen');
        }}
      />
      <BtnItem
        icon={ClusterIcon}
        title={'Manage Clusters'}
        action={() => {
          props.navigation.navigate('ClusterScreen');
        }}
      />
      <BtnItem
        icon={userIcon}
        title={'Manage Users'}
        action={() => {
          props.navigation.navigate('UsersScreen');
        }}
      />
      <BtnItem
        icon={truckIcon}
        title={'Manage Trucks'}
        action={() => {
          props.navigation.navigate('TruckScreen');
        }}
      />
    </Layout>
  );
};

export default MainScreen;
