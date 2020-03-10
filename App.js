import React from 'react';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {mapping, dark as lightTheme} from '@eva-design/eva';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import BinScreen from './screens/BinScreen';
const NavigationStack = createStackNavigator(
  {
    Login: {screen: HomeScreen},
    Main: {screen: MainScreen},
    BinScreen: {screen: BinScreen},
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
