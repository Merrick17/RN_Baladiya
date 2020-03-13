const initalUserState = {};

export const userState = (state = initalUserState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return state;
    case 'LOGOUT_USER':
      return state;
    default:
      return state;
  }
};
