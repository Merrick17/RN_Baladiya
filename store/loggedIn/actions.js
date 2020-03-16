import {fetchClusters} from '../clusters/actions';
import {saveUserToken} from '../../helpers/tokenActions';
import {fetchBins} from '../bin/actions';
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
        saveUserToken(responseJson.token);
        dispatch(fetchClusters(responseJson.token));
        dispatch(fetchBins(responseJson.token));
        dispatch(LoginUser(responseJson));

        navigation.replace('Main');
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };
};
