import { Marker} from "@react-google-maps/api";

export default function PlaceInfo(props) {

  const places = [
    { info: "info1", location: { lat: props.latlng[0], lng: props.latlng[1] } }
   
  ];

  return (
    <>
      {places.map((marker) => (
        <Marker
          key="marker_1"
        
          position={{
            lat: marker.location.lat,
            lng: marker.location.lng,
          }}
        />
      ))}
    </>
  );
}