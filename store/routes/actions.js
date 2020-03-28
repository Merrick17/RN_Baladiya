export const getRoutes = data => {
  return {
    type: 'GET_ROUTES',
    data: data,
  };
};

export const FetchRoutes = bins => {
  return async dispatch => {
    try {
      let response = await fetch(
        'https://hidden-mountain-32712.herokuapp.com/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({bins: bins}),
        },
      );
      let responseJson = await response.json();
      //console.log("All Bins",responseJson);
      dispatch(getRoutes(responseJson.locations));
    } catch (err) {
      console.log(err);
    }
  };
};
