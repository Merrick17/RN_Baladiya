import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from "@react-native-community/geolocation";
const MapScreen = () => {
  MapboxGL.setAccessToken(
    'pk.eyJ1IjoibWVycmljazE3IiwiYSI6ImNrNW1qNGNhejAyZDYzbm5zc2gxbm43ZHkifQ.kJHwGdb3NjNno06-kr3r7Q',
  );

  const [long, setLong] = useState(10.629847);
  const [alt, setLalt] = useState(35.810175);
  const [info, setInfo] = useState([]);
  

  /* useEffect(() => {
   
  });*/
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera centerCoordinate={[long, alt]} zoomLevel={10} />
      
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
export default MapScreen;
