import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";

const Station = () => {
  const [location, setLocation] = useState({
    latitude: 36.8941204,
    longitude: 10.1870475,
  });

  /*   const getLocation = async () => {
    try {
      await Location.requestBackgroundPermissionsAsync();
      setLocation(await navigator.geolocation.location());
    } catch (error) {
      console.log(error);
    }
  }; */

  useEffect(() => {
    console.log(location);
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  const getLoc = () => {
    console.log("press", location.coords);
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    setRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    });
  };

  const sendLoc = () => {
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    console.log(
      "Use these variables to send current location(",
      latitude,
      ",",
      longitude,
      ")"
    );
  };

  return (
    <MapView
      style={{ flex: 0.6 }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0181,
        longitudeDelta: 0.0181,
      }}
      onPress={() => {
        sendLoc();
      }}
    >
      <MapView.Marker
        coordinate={{ latitude: 36.78825, longitude: 10 }}
        title={"title"}
        description={"description"}
      />
      <MapView.Marker
        coordinate={{ latitude: 34.70075, longitude: 9.1 }}
        title={"title"}
        description={"description"}
      />
      <MapView.Marker
        coordinate={{ latitude: 36.78825, longitude: 10.2324 }}
        title={"title"}
        description={"description"}
      />
      <MapView.Marker
        coordinate={{ latitude: 36.77725, longitude: 10.2324 }}
        title={"title"}
        description={"description"}
      />
      <MapView.Marker
        coordinate={{ latitude: 36.64725, longitude: 10.2324 }}
        title={"title"}
        description={"description"}
      />
      <MapView.Marker
        coordinate={{ latitude: 36.86625, longitude: 10.2324 }}
        title={"title"}
        description={"description"}
      />
      <MapView.Marker
        coordinate={{ latitude: 36.06555, longitude: 10.2324 }}
        title={"title"}
        description={"description"}
      />
    </MapView>
  );
};
export default Station;
