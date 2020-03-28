const initspinnerState = false;

export const spinnerState = (state = initspinnerState, action) => {
  switch (action.type) {
    case 'ENABLE':
      return true;
    case 'DISABLE':
      return false;
    default:
      return state;
  }
};
