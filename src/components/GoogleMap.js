import React, { useCallback, useRef } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import PlaceInfo from "./PlaceInfo";

const libraries = ["places"];
const mapContainerStyle = {
  height: "70vh",
  width: "100%",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export default function GoogleMapComponent(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAevAptmzosOKdb75C6Z3_GXmh_apYmCUM',
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  const setLanlng = props.latlng;

  return (
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={11}

        center={{
        lat: setLanlng[0],
        lng: setLanlng[1],
        }}

        options={options}
        onLoad={onMapLoad}
      >
        <PlaceInfo latlng={setLanlng}/>
      </GoogleMap>
  );
}