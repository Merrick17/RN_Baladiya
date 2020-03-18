import AsyncStorage from '@react-native-community/async-storage';
export const addUser = data => {
  return {
    type: 'ADD_USER',
    data: data,
  };
};

export const getAllUsers = data => {
  return {
    type: 'GET_ALL_USERS',
    data: data,
  };
};

export const deleteUser = data => {
  return {
    type: 'DELETE_USER',
    data: data,
  };
};
export const addNewUser = (user, navigator, userToken) => {
  console.log('Token', userToken);
  console.log('User', user);
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/users/adduser',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': userToken,
          },
          body: JSON.stringify(user),
        },
      );

      console.log(response);
      let responseJson = await response.json();
      console.log('Response JSON', responseJson);
      if (responseJson._id !== null) {
        //dispatch(fetchBins(userToken));
        navigator.navigate('Main');
      }
      //console.log('Deleted', responseJson);
    } catch (err) {
      console.log(err);
    }
  };
};
export const UpdateUser = (user, id, navigator, userToken) => {
  console.log('Token', userToken);
  console.log('User', user);
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/users/' + id,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': userToken,
          },
          body: JSON.stringify(user),
        },
      );

      console.log(response);
      let responseJson = await response.json();
      console.log('Response JSON', responseJson);
      if (responseJson._id !== null) {
        //dispatch(fetchBins(userToken));
        navigator.navigate('Main');
      }
      //console.log('Deleted', responseJson);
    } catch (err) {
      console.log(err);
    }
  };
};
export const deleteUserData = (binId, userToken) => {
  //console.log('My Auth Token', userToken);
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/users/delete/' + binId,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': userToken,
          },
        },
      );

      console.log(response);
      let responseJson = await response.json();
      if (responseJson.message == 'removed') {
        dispatch(fetchUsers(userToken));
      }
      console.log('Deleted', responseJson);
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchUsers = token => {
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/users',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': token,
          },
        },
      );
      let responseJson = await response.json();
      console.log('Response JSON', responseJson);
      dispatch(getAllUsers(responseJson.users));
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchUsersByType = (type, token) => {
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/users/' + type,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': token,
          },
        },
      );
      let responseJson = await response.json();

      dispatch(getAllUsers(responseJson.result));
    } catch (err) {
      console.log(err);
    }
  };
};
