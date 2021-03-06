import AsyncStorage from '@react-native-community/async-storage';
export const addBin = data => {
  return {
    type: 'ADD_BIN',
    data: data,
  };
};

export const getAllBins = data => {
  return {
    type: 'GET_ALL_BINS',
    data: data,
  };
};

export const deleteBin = data => {
  return {
    type: 'DELETE_BIN',
    data: data,
  };
};
export const addNewBin = (bin, navigator, userToken) => {
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/bin/add',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': userToken,
          },
          body: JSON.stringify(bin),
        },
      );

      let responseJson = await response.json();
      if (responseJson._id !== null) {
        dispatch(fetchBins(userToken));
        navigator.navigate('Main');
      }
    } catch (err) {}
  };
};
export const updateBin = (bin, userId, navigator, userToken) => {
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/bin/' + userId,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': userToken,
          },
          body: JSON.stringify(bin),
        },
      );

      let responseJson = await response.json();
      if (responseJson._id !== null) {
        dispatch(fetchBins(userToken));
        navigator.navigate('Main');
      }
    } catch (err) {}
  };
};

export const deleteBinData = (binId, userToken) => {
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/bin/' + binId,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': userToken,
          },
        },
      );

      let responseJson = await response.json();
      if (responseJson.message == 'removed') {
        dispatch(fetchBins(userToken));
      }
      console.log('Deleted', responseJson);
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchBins = token => {
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/bin',
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
      //console.log("All Bins",responseJson.result);
      dispatch(getAllBins(responseJson.result));
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchBinsByCluster = (clusterID, token) => {
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/bin/' + clusterID,
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
      //console.log('FETCHED BINS', responseJson.result);
      dispatch(getAllBins(responseJson.result));
    } catch (err) {
      console.log(err);
    }
  };
};
