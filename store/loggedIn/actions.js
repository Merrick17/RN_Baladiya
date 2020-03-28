import {fetchClusters} from '../clusters/actions';
import {saveUserToken} from '../../helpers/tokenActions';
import {fetchBins, fetchBinsByCluster} from '../bin/actions';
import {fetchUsers} from '../users/actions';
import {fetchTrucks} from '../trucks/action';
import {EnableSpinner, disableSpinner} from '../spinner/actions';
import {Alert} from 'react-native';
export const LoginUser = data => {
  return {
    type: 'LOGIN_USER',
    data: data,
  };
};

export const LogoutUser = data => {
  return {
    type: 'LOGIN_USER',
    data: data,
  };
};

export const asyncloginUser = (user, navigation) => {
  return async dispatch => {
    dispatch(EnableSpinner());
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/users/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(user),
        },
      );
      let responseJson = await response.json();
      console.log(responseJson);
      if (responseJson.token) {
        if (responseJson.role == 1) {
          saveUserToken(responseJson.token);
          dispatch(fetchClusters(responseJson.token));
          dispatch(fetchBins(responseJson.token));
          dispatch(fetchUsers(responseJson.token));
          dispatch(fetchTrucks(responseJson.token));
          dispatch(LoginUser(responseJson));
          dispatch(disableSpinner());
          navigation.replace('Main');
        } else {
          //console.log(responseJson);
          saveUserToken(responseJson.token);

          dispatch(
            fetchBinsByCluster(responseJson.cluster, responseJson.token),
          );

          dispatch(LoginUser(responseJson));
          dispatch(disableSpinner());
          navigation.replace('Map');
        }
      } else {
        dispatch(disableSpinner());
        Alert.alert(
          'Error',
          'Wrong password or Auth ID ',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
};
