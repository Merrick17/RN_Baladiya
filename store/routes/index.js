const currentRoutes = [];

export const RouteState = (state = currentRoutes, action) => {
  switch (action.type) {
    case 'GET_ROUTES':
      return action.data;

    default:
      return state;
  }
};
