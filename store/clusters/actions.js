import AsyncStorage from '@react-native-community/async-storage';
export const addCluster = data => {
  return {
    type: 'ADD_CLUSTER',
    data: data,
  };
};

export const getAllClusters = data => {
  return {
    type: 'GET_ALL_CLUSTERS',
    data: data,
  };
};

export const deleteClusster = data => {
  return {
    type: 'DELETE_CLUSTER',
    data: data,
  };
};
export const addNewCluster = (cluster, navigator, userToken) => {
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/cluster/add',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': userToken,
          },
          body: JSON.stringify(cluster),
        },
      );

      //(response);
      let responseJson = await response.json();
      if (responseJson._id !== null) {
        dispatch(fetchClusters(userToken));
        navigator.navigate('Main');
      }
      //console.log('Deleted', responseJson);
    } catch (err) {
      console.log(err);
    }
  };
};
export const UpdateCluster = (cluster, clusterId, navigator, userToken) => {
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/cluster/update/' +
          clusterId,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': userToken,
          },
          body: JSON.stringify(cluster),
        },
      );

      //console.log(response);
      let responseJson = await response.json();
      if (responseJson._id !== null) {
        dispatch(fetchClusters(userToken));
        navigator.navigate('Main');
      }
     // console.log('Deleted', responseJson);
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteClusterData = (clusterid, userToken) => {
  //console.log('My Auth Token', userToken);
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/cluster/delete/' +
          clusterid,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': userToken,
          },
        },
      );

      //console.log(response);
      let responseJson = await response.json();
      if (responseJson.message == 'removed') {
        dispatch(fetchClusters(userToken));
      }
     // console.log('Deleted', responseJson);
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchClusters = token => {
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/cluster',
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

      dispatch(getAllClusters(responseJson.result));
    } catch (err) {
      console.log(err);
    }
  };
};
