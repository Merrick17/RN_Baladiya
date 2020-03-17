import {fetchClusters} from '../clusters/actions';
import {saveUserToken} from '../../helpers/tokenActions';
import {fetchBins, fetchBinsByCluster} from '../bin/actions';
import {fetchUsers} from '../users/actions';
import {fetchTrucks} from '../trucks/action';
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
      if (responseJson.token) {
        if (responseJson.role == 1) {
          saveUserToken(responseJson.token);
          dispatch(fetchClusters(responseJson.token));
          dispatch(fetchBins(responseJson.token));
          dispatch(fetchUsers(responseJson.token));
          dispatch(fetchTrucks(responseJson.token));
          dispatch(LoginUser(responseJson));
          navigation.replace('Main');
        } else {
          saveUserToken(responseJson.token);

          dispatch(
            fetchBinsByCluster(responseJson.cluster, responseJson.token),
          );

          dispatch(LoginUser(responseJson));
          navigation.replace('Map');
        }
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };
};
