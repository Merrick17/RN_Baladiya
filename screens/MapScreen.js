import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from '@react-native-community/geolocation';
import {useSelector} from 'react-redux';
import {coordinatations} from '../helpers/coordinations';
import {lineString as makeLineString} from '@turf/helpers';
const MapScreen = () => {
  const state = useSelector(state => state);
  //console.log(state.BinState);

  MapboxGL.setAccessToken(
    'pk.eyJ1IjoibWVycmljazE3IiwiYSI6ImNrNW1qNGNhejAyZDYzbm5zc2gxbm43ZHkifQ.kJHwGdb3NjNno06-kr3r7Q',
  );
  const [coord, setCoordinates] = useState({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: coordinatations(state.BinState),
        },
      },
    ],
  });

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.PointAnnotation
            key={'001'}
            id={'001'}
            title="Depot"
            coordinate={[10.629847, 35.810175]}></MapboxGL.PointAnnotation>
          <MapboxGL.Camera
            centerCoordinate={[10.629847, 35.810175]}
            zoomLevel={12}
          />
          {state.BinState.map(elm => (
            <MapboxGL.PointAnnotation
              key={elm._id}
              id={elm._id}
              title=""
              coordinate={[elm.lng, elm.lat]}></MapboxGL.PointAnnotation>
          ))}
          <MapboxGL.PointAnnotation
            key={'002'}
            id={'002'}
            title="Decharge"
            coordinate={[35.785497, 10.58179]}></MapboxGL.PointAnnotation>
          <MapboxGL.ShapeSource id="routeSource" shape={coord}>
            <MapboxGL.LineLayer id="linelayer1" style={{lineColor: 'red'}} />
          </MapboxGL.ShapeSource>
        </MapboxGL.MapView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});
const layerStyles = {
  origin: {
    circleRadius: 5,
    circleColor: 'white',
  },
  destination: {
    circleRadius: 5,
    circleColor: 'white',
  },
  route: {
    lineColor: 'white',
    lineCap: MapboxGL.LineJoin.Round,
    lineWidth: 3,
    lineOpacity: 0.84,
  },
  progress: {
    lineColor: '#314ccd',
    lineWidth: 3,
  },
};
export default MapScreen;
