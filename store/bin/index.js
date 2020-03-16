const BinsInitState = [];

export const BinState = (state = BinsInitState, action) => {
  switch (action.type) {
    case 'ADD_BIN':
      return [...state, action.data];
    case 'GET_ALL_BINS':
      return action.data;
    default:
      return state;
  }
};
