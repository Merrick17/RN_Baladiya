import AsyncStorage from '@react-native-community/async-storage';
import {fetchClusters} from '../clusters/actions';
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
        console.log('Response', responseJson);
        storeToken(responseJson.token);
        storeCluster(responseJson.cluster);
        storeUserId(responseJson.id);
        dispatch(fetchClusters(responseJson.token));
        dispatch(LoginUser(responseJson));

        navigation.replace('Main');
      } else {
        /* console.log('Response', responseJson);
        dispatch(showToast({show: true, message: responseJson.message}));
        setTimeout(() => {
          dispatch(hideToast({show: false, message: responseJson.message}));
        }, 500);*/
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const storeToken = async token => {
  console.log("Storing Token",token)
  try {
    await AsyncStorage.setItem('token', JSON.stringify(token));
  } catch (e) {
    console.log(e)
    // saving error
  }
};
export const storeCluster = async clusterId => {
  try {
    await AsyncStorage.setItem('cluster', JSON.stringify(clusterId));
  } catch (e) {
    // saving error
  }
};
export const storeUserId = async userId => {
  try {
    await AsyncStorage.setItem('id', JSON.stringify(userId));
  } catch (e) {
    // saving error
  }
};

export const getItem = async text => {
  try {
    const value = await AsyncStorage.getItem(text);
    if (value !== null) {
      // value previously stored
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
  }
};
