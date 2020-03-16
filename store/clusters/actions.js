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

export const deleteClusterData = clusterid => {
  /*AsyncStorage.getItem('token').then(data => {
    let token = JSON.parse(data);
    console.log('My Token', token);
  });*/
 let token = getMyToken() ;
 console.log("Getting TOken",token); 
  return async dispatch => {
    try {
      let response = await fetch(
        'https://desolate-ravine-46577.herokuapp.com/cluster/delete' +
          clusterid,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': token,
          },
        },
      );
      let responseJson = await response.json();

      console.log('Deleted Token', responseJson);
      //dispatch(getAllClusters(responseJson.result));
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchClusters = token => {
  //let token = getItem('token');
  //console.log('my token ', token);
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

      //console.log('Clusters', responseJson);
      dispatch(getAllClusters(responseJson.result));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMyToken = async () => {
  var value;
  try {
    value = await AsyncStorage.getItem('token');
  } catch (e) {
    // read error
  }
  console.log('Done.', value);
return value ; 
 
};
