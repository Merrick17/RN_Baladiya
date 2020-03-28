import {lineString as makeLineString} from '@turf/helpers';
export const coordinatations = async cordinations => {
  try {
    let response = await fetch('https://hidden-mountain-32712.herokuapp.com/', {
      method: 'POST',
      body: {
        bins: cordinations,
      },
    });
    let responseJson = await response.json();
    //console.log('All Routes', responseJson.locations);
    return responseJson.locations;
  } catch (err) {
    console.log(err);
  }
};
