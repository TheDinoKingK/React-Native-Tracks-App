import React, {useContext} from "react";
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {PolyLine, Circle} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

const Map = () => {
    const {state: {currentLocation, locations}} = useContext(LocationContext);

    if(!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }

    // might be needed
    // initialLocation = {
    //     longitude: -122.0312186,
    //     latitude: 37.33233141,
    // };

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius{20}
                strokeColor="rgba(158,158,255,1.0))"
                fillColor="rgba(158, 158, 255, 0.3)"
            />
            <PolyLine coordinates={locations.map(loc => loc.coords)} />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;


/*
  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      setErr(e);
    }
  };


  import { requestForegroundPermissionsAsync } from 'expo-location';

  const { granted } = await requestForegroundPermissionsAsync();
 */