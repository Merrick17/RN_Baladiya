import AsyncStorage from '@react-native-community/async-storage';
export const addTruck = data => {
  return {
    type: 'ADD_TRUCK',
    data: data,
  };
};

export const getAllTrucks = data => {
  return {
    type: 'GET_ALL_TRUCKS',
    data: data,
  };
};

export const deleteTruck = data => {
  return {
    type: 'DELETE_TRUCK',
    data: data,
  };
};
export const addNewTruck = (truck, navigator, userToken) => {
  console.log('Truck', userToken);
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/truck/add',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': userToken,
          },
          body: JSON.stringify(truck),
        },
      );

      //console.log(response);
      let responseJson = await response.json();
      console.log('Response JSON', responseJson);
      if (responseJson._id !== null) {
        dispatch(fetchTrucks(userToken));
        navigator.navigate('Main');
      }
      //console.log('Deleted', responseJson);
    } catch (err) {
      console.log(err);
    }
  };
};
export const updateTruck = (truck, truckId, navigator, userToken) => {
  console.log('Truck', userToken);
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/truck/add',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': userToken,
          },
          body: JSON.stringify(truck),
        },
      );

      //console.log(response);
      let responseJson = await response.json();
      console.log('Response JSON', responseJson);
      if (responseJson._id !== null) {
        dispatch(fetchTrucks(userToken));
        navigator.navigate('Main');
      }
      //console.log('Deleted', responseJson);
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteTruckData = (truckId, userToken) => {
  //console.log('My Auth Token', userToken);
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/truck/delete/' + truckId,
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
        dispatch(fetchTrucks(userToken));
      }
      console.log('Deleted', responseJson);
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchTrucks = token => {
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/truck/all',
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
      dispatch(getAllTrucks(responseJson.result));
    } catch (err) {
      console.log(err);
    }
  };
};
