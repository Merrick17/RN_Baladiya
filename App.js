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
import AddUser from './screens/addUserScreen';
import AddCluster from './screens/addCluster';
import AddBin from './screens/addNewBin';
import AddTruck from './screens/addTruck';
import MapScreen from './screens/MapScreen';
import {Provider} from 'react-redux';
import {store} from './store/index';
import EditUser from './screens/EditUser';
import EditCluster from './screens/EditCluster';
import EditBin from './screens/EditBin';
import {default as customTheme} from './assets/custom-theme.json'; 
const NavigationStack = createStackNavigator(
  {
    Login: {screen: HomeScreen},
    Main: {screen: MainScreen},
    BinScreen: {screen: BinScreen},
    ClusterScreen: {screen: ClusterScreen},
    UsersScreen: {screen: UsersScreen},
    TruckScreen: {screen: TruckScreen},
    AddUser: {screen: AddUser},
    AddCluster: {screen: AddCluster},

    AddBin: {screen: AddBin},
    AddTruck: {screen: AddTruck},
    EditUser: {screen: EditUser},
    EditCluster: {screen: EditCluster},
    EditBin: {screen: EditBin},

    Map: {screen: MapScreen},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const App = () => {
  const theme = { ...lightTheme, ...customTheme };
  console.disableYellowBox = true;
  const Navigation = createAppContainer(NavigationStack);
  return (
    <ApplicationProvider mapping={mapping} theme={theme}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </ApplicationProvider>
  );
};

export default App;
