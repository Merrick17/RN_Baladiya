import {lineString as makeLineString} from '@turf/helpers';
export const coordinatations = cordinations => {
  //console.log("My Data",cordinations);
  let finalInfo = [];
  cordinations.forEach(element => {
    let cord = [element.lng, element.lat];
    finalInfo.push(cord);
  });
  /*const line = makeLineString(finalInfo);
  console.log('Final Info', finalInfo);
  return line;*/
  return finalInfo;
};
