export const EnableSpinner = () => {
  return {
    type: 'ENABLE',
    data: true,
  };
};

export const disableSpinner = () => {
  return {
    type: 'DISABLE',
    data: false,
  };
};
