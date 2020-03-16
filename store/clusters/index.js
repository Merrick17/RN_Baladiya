const initialClusterState = [];

export const clusterState = (state = initialClusterState, action) => {
  switch (action.type) {
    case 'ADD_CLUSTER':
      return state;
    case 'GET_ALL_CLUSTERS':
      return action.data;
    default:
      return state;
  }
};
