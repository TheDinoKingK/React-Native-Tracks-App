import React, {useContext} from "react";
import {Text, StyleSheet} from 'react-native';
import MapView, {PolyLine} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

const Map = () => {
    const {state} = useContext(LocationContext);

    console.log(state);

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 37.33233,
                longitude: -122.03121,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            {/*<PolyLine coordinates={points}/>*/}
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