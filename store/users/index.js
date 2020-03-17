const UsersInitState = [];

export const UsersState = (state = UsersInitState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.data];
    case 'GET_ALL_USERS':
      return action.data;
    case 'DELETE_USER':
      return action.data;
    default:
      return state;
  }
};
