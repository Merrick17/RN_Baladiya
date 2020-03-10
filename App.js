import React from 'react';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {mapping, dark as lightTheme} from '@eva-design/eva';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import BinScreen from './screens/BinScreen';
import ClusterScreen from './screens/ClusterScreen';
import UsersScreen from './screens/UserScreen';
import TruckScreen from './screens/TruckScreen';
const NavigationStack = createStackNavigator(
  {
    Login: {screen: HomeScreen},
    Main: {screen: MainScreen},
    BinScreen: {screen: BinScreen},
    ClusterScreen: {screen: ClusterScreen},
    UsersScreen: {screen: UsersScreen},
    TruckScreen: {screen: TruckScreen},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const App = () => {
  const Navigation = createAppContainer(NavigationStack);
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Navigation />
    </ApplicationProvider>
  );
};

export default App;
