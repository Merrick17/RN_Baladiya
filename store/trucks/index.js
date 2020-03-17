const TrucksInitState = [];

export const TruckState = (state = TrucksInitState, action) => {
  switch (action.type) {
    case 'ADD_TRUCK':
      return [...state, action.data];
    case 'GET_ALL_TRUCKS':
      return action.data;
    case 'DELETE_TRUCK':
      return action.data;
    default:
      return state;
  }
};
