import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Icon, Input, Layout, Button} from '@ui-kitten/components';
import BtnItem from '../components/BtnItem/index';
import TrashIcon from '../icons/trashIcon';
import ClusterIcon from '../icons/clusterIcon';
import userIcon from '../icons/personIcon';
import truckIcon from '../icons/truckIcon';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const MainScreen = props => {
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <View>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width * 0.9} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#313342',
            backgroundGradientFrom: '#313342',
            backgroundGradientTo: '#313342',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
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
